/*
 * 主题管理
 */
import React, { PureComponent } from 'react';
import { Table, Card, Button, Divider } from 'antd';
import { connect, history } from 'umi';
import TopicAdd from '@/components/TopicAdd';
import CatalogTree from '@/components/CatalogTree';
import QuestionAdd from '@/components/QuestionAdd';

@connect(({ topic, loading }) => ({
  list: topic.list,
  page: topic.page,
  topic: topic.topic,
  catalogList: topic.catalogList,
  loading: loading.models.topic,
  questionLoading: loading.models.question,
}))
export default class TopicAdm extends PureComponent {
  state = {
    addTopicVisible: false,
    catalogTreeVisible: false,
    addQuestionVisible: false,
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

  showAddQuestion = (topic) => {
    this.props.dispatch({ type: 'topic/findCatalog', payload: topic })
      .then(() => this.setState({ addQuestionVisible: true }));
  };
  closeAddQuestion = () => {
    this.props.dispatch({ type: 'topic/clearCatalog' });
    this.setState({ addQuestionVisible: false });
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

  handleAddQuestion = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/saveOne',
      payload: values,
    })
      .then(this.closeAddQuestion);
  }

  columns = [
    {
      title: '#',
      key: 'operation',
      width: 150,
      render: (topic) => (
        <>
          <a onClick={() => this.showCatalogTree(topic)}>目录</a>
          <Divider type="vertical" />
          <a onClick={() => this.showAddQuestion(topic)}>题目</a>
          <Divider type="vertical" />
          <a onClick={() => {
            this.props.dispatch({
              type: 'practice/query',
              payload: { topicId: topic.id },
            });
            history.push('/practice');
          }}>练习</a>
        </>
      )
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
    const { list, loading, page, catalogList, topic, questionLoading } = this.props;
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
        <QuestionAdd
          visible={this.state.addQuestionVisible}
          onClose={this.closeAddQuestion}
          onOk={this.handleAddQuestion}
          loading={questionLoading}
          topic={topic}
          catalogList={catalogList}
        />
      </Card>
    );
  }
}
