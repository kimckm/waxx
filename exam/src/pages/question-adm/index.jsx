import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'umi';

@connect(({ question, loading }) => ({
  list: question.list,
  page: question.page,
  loading: loading.models.question,
}))
export default class QuestionList extends PureComponent {
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
      </Card>
    );
  }
}
