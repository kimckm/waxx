import React, { PureComponent } from 'react';
import { Table, Card, Button, Divider } from 'antd';
import { connect } from 'umi';
import ChoiceAdd from '@/components/ChoiceAdd';
import ChoiceUpdate from '@/components/ChoiceUpdate';

@connect(({ choice, loading }) => ({
  list: choice.list,
  page: choice.page,
  loading: loading.models.choice,
}))
export default class ChoiceList extends PureComponent {
  state = {
    addQuestionVisible: false,
    updateChoiceVisible: false,
    choice: {},
  }

  showAddQuestion = () => this.setState({ addQuestionVisible: true });
  closeAddQuestion = () => this.setState({ addQuestionVisible: false });
  showUpdateChoice = (choice) => this.setState({ updateChoiceVisible: true, choice });
  closeUpdateChoice = () => this.setState({ updateChoiceVisible: false, choice: {} });

  handleAddQuestion = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'choice/saveOne',
      payload: values,
    })
      .then(this.closeAddQuestion);
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch({
      type: 'choice/findByPage',
      payload: {
        current: page.current,
        size: page.size,
      },
    });
  }

  columns = [
    {
      title: '操作',
      key: 'ops',
      width: 100,
      render: (choice) => (
        <>
          <a onClick={() => this.showUpdateChoice(choice)}>编辑</a>
          <Divider type="vertical" />
          <a onClick={() => this.preview(choice)}>预览</a>
        </>
      ),
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
        <ChoiceAdd
          visible={this.state.addQuestionVisible}
          onClose={this.closeAddQuestion}
          onOk={this.handleAddQuestion}
          loading={loading}
        />
        <ChoiceUpdate
          choice={this.state.choice}
          visible={this.state.updateChoiceVisible}
          onClose={this.closeUpdateChoice}
          onOk={() => ''}
          loading={loading}
        />
      </Card>
    );
  }
}
