/*
 * 主题管理
 */
import React, { PureComponent } from 'react';
import { Table, Card, Button } from 'antd';
import { connect } from 'umi';
import TopicAdd from '@/components/TopicAdd';

@connect(({ topic, loading }) => ({
  list: topic.list,
  page: topic.page,
  loading: loading.models.topic,
}))
export default class TopicAdm extends PureComponent {
  state = {
    addTopicVisible: false,
  }

  showAddTopic = () => this.setState({ addTopicVisible: true });
  closeAddTopic = () => this.setState({ addTopicVisible: false });

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch({
      type: 'topic/findByPage',
      payload: {
        current: page.current,
        size: page.size,
      },
    });
  }

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'topic/saveOne',
      payload: {
        ...values
      },
    })
      .then(this.closeAddTopic)
      .then(() => dispatch({ type: 'topic/findByPage'}));
  }

  columns = [
    {
      title: '#',
      key: 'operation',
      width: 70,
      render: (topic) => <a>目录</a>
    },
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: '标题',
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
    const { list, loading, page } = this.props;
    const dataSource = list.map(topic => ({
      ...topic,
      key: topic.id,
    }));

    return (
      <Card>
        <Button onClick={this.showAddTopic}>新建</Button>
        <Table
          dataSource={dataSource}
          columns={this.columns}
          bordered
          size="middle"
          loading={loading}
          pagination={{
            position: ['bottomLeft'],
            pageSize: page.size,
            total: page.total,
            current: page.current,
            showTotal: total => `共 ${total} 条`,
            onChange: (p, s) => dispatch({
              type: 'topic/findByPage',
              payload: {
                current: p,
                size: s,
              },
            }),
          }}
        />
        <TopicAdd
          visible={this.state.addTopicVisible}
          onClose={this.closeAddTopic}
          onOk={this.handleSubmit}
          loading={loading}
        />
      </Card>
    );
  }
}
