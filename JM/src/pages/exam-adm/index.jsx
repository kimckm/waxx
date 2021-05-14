/*
 * 试卷管理
 */
import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'umi';
import QuestionAdd from '@/components/QuestionAdd';

@connect(({ exam, loading }) => ({
  examList: exam.list,
  loading: loading.models.question,
}))
export default class ExamAdm extends PureComponent {
  state = {
    addQuestionVisible: false,
    exam: {}, // 当前操作的试卷
  }

  showAddQuestion = (exam) => this.setState({ addQuestionVisible: true, exam });
  closeAddQuestion = () => this.setState({
    addQuestionVisible: false,
    exam: {},
  });

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const { exam } = this.state;
    dispatch({
      type: 'question/saveOne',
      payload: {
        examId: exam.id,
        ...values
      },
    })
      .then(this.closeAddQuestion);
  }

  columns = [
    {
      title: '#',
      key: 'operation',
      width: 100,
      render: (exam) => <a onClick={() => this.showAddQuestion(exam)}>添加题目</a>
    },
    {
      title: '试卷标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 180,
    }
  ]

  render() {
    const { examList, loading } = this.props;
    const dataSource = examList.map(exam => ({
      ...exam,
      key: exam.id,
    }));

    return (
      <Card>
        <Table
          dataSource={dataSource}
          columns={this.columns}
          bordered
          pagination={false}
          size="middle"
        />
        <QuestionAdd
          title={this.state.exam.title}
          visible={this.state.addQuestionVisible}
          onClose={this.closeAddQuestion}
          onOk={this.handleSubmit}
          loading={loading}
        />
      </Card>
    );
  }
}
