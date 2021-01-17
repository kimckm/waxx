/**
 * 考试页面
 */
import React, { PureComponent } from 'react';
import { Button, Radio, Layout, Modal, Badge } from 'antd';
import { connect } from 'umi';
import Directory from '@/components/Directory';
import Exchange from '@/components/Exchange';

const { Header, Footer, Content } = Layout;

@connect(({ exam }) => ({
  list: exam.list,
  current: exam.current,
}))
export default class Exam extends PureComponent {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'exam/query' });
  }

  // 显示练习概况
  showInfo = () => {
    const { list } = this.props;
    const questionTotal = list.length;
    let correctTotal = 0;
    const content = [];
    list.forEach((v, i) => {
      const seq = i + 1;
      if (!v.answer) {
        content.push(<div><Badge status="default" />{seq}. 尚未作答!</div>);
        return;
      }
      if (v.answer === v.correct) {
        correctTotal++;
        content.push(<div><Badge status="success" />{seq}. 正确!</div>);
      } else {
        content.push(<div><Badge status="error" />{seq}. 错误!</div>);
      }
    });
    Modal.info({
      title: '练习概况',
      content,
      maskClosable: true,
    });
  }

  render() {
    const { list, current, dispatch } = this.props;
    const q = list[current - 1];
    if (!q) {
      return 'a';
    }
    return (
      <Layout>
        <Header>
          <Button type="primary" onClick={this.showInfo}>练习概况</Button>
        </Header>
        <Content style={{ padding: '50px 50px' }}>
          <Exchange
            key={q.id}
            v={q}
            onChange={(v) => dispatch({ type: 'exam/save', payload: { id: q.id, answer: v } })}
          />
        </Content>
        <Footer>
          <Directory
            onChange={(p) => dispatch({ type: 'exam/goto', payload: { current: p } })}
            total={list.length}
            current={current}
          />
        </Footer>
      </Layout>
    );
  }
}
