import React, { PureComponent } from 'react';
import { Table, Card, Button } from 'antd';
import { connect } from 'umi';
import QuestionAdd from '@/components/QuestionAdd';

@connect(({ question, loading }) => ({
  list: question.list,
  page: question.page,
  loading: loading.models.question,
}))
export default class QuestionList extends PureComponent {
  state = {
    addQuestionVisible: false,
  }

  showAddQuestion = () => this.setState({ addQuestionVisible: true });
  closeAddQuestion = () => this.setState({ addQuestionVisible: false });

  handleAddQuestion = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/saveOne',
      payload: values,
    })
      .then(this.closeAddQuestion);
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch({
      type: 'question/findByPage',
      payload: {
        current: page.current,
        size: page.size,
      },
    });
  }

  columns = [
    {
      title: 'ID',
      key: 'id',
      width: 100,
      dataIndex: 'id',
    },
    {
      title: '题目',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 180,
    }
  ]

  render() {
    const { list, page, dispatch, loading } = this.props;
    return (
      <Card>
        <Button onClick={this.showAddQuestion}>新建</Button>
        <Table
          dataSource={list}
          columns={this.columns}
          bordered
          pagination={{
            position: ['bottomLeft'],
            pageSize: page.size,
            total: page.total,
            current: page.current,
            showTotal: total => `共 ${total} 条`,
            onChange: (p, s) => dispatch({
              type: 'question/findByPage',
              payload: {
                current: p,
                size: s,
              },
            }),
          }}
          size="middle"
          loading={loading}
        />
        <QuestionAdd
          visible={this.state.addQuestionVisible}
          onClose={this.closeAddQuestion}
          onOk={this.handleAddQuestion}
          loading={loading}
        />
      </Card>
    );
  }
}
