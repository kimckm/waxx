/*
 * 主题管理
 */
import React, { PureComponent } from 'react';
import { Table, Card, Button } from 'antd';
import { connect } from 'umi';
import TopicAdd from '@/components/TopicAdd';
import CatalogTree from '@/components/CatalogTree';

@connect(({ topic, loading }) => ({
  list: topic.list,
  page: topic.page,
  topic: topic.topic,
  catalogList: topic.catalogList,
  loading: loading.models.topic,
}))
export default class TopicAdm extends PureComponent {
  state = {
    addTopicVisible: false,
    catalogTreeVisible: false,
  }

  showAddTopic = () => this.setState({ addTopicVisible: true });
  closeAddTopic = () => this.setState({ addTopicVisible: false });

  showCatalogTree = (topic) => {
    this.props.dispatch({ type: 'topic/findCatalog', payload: topic })
      .then(() => this.setState({ catalogTreeVisible: true }));
  };
  closeCatalogTree = () => {
    this.props.dispatch({ type: 'topic/clearCatalog' });
    this.setState({ catalogTreeVisible: false });
  };

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
      render: (topic) => <a onClick={() => this.showCatalogTree(topic)}>目录</a>
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
    const { list, loading, page, catalogList, topic } = this.props;
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
        <CatalogTree
          visible={this.state.catalogTreeVisible}
          onClose={this.closeCatalogTree}
          topic={topic}
          catalogList={catalogList}
        />
      </Card>
    );
  }
}
