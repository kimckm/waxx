import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'umi';

@connect(({ question }) => ({
  list: question.list,
}))
export default class QuestionList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'question/findByPage' });
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
      dataIndex: 'createAt',
      key: 'createAt',
      width: 180,
    }
  ]

  render() {
    const { list } = this.props;
    return (
      <Card>
        <Table
          dataSource={list}
          columns={this.columns}
          bordered
          pagination={false}
          size="middle"
        />
      </Card>
    );
  }
}
