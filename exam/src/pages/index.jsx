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
    const content = [];

    list.forEach((v, i) => {
      const seq = i + 1;
      if (!v.answer) {
        content.push(<div key={`rs_${v.id}`}><Badge status="default" />{seq}. 尚未作答!</div>);
        return;
      }

      // 填空题判断
      if (typeof(v.answer) === 'object') {
        let flag = true;
        v.correct.forEach(s => {
          if (s.expected.indexOf('/') === 0) {
            const reg = eval(s.expected);
            if (!reg.test(v.answer[s.code])) {
              flag = false;
            }
          } else {
            if (s.expected !== v.answer[s.code]) {
              flag = false;
            }
          }
        });
        if (flag) {
          content.push(<div key={`rs_${v.id}`}><Badge status="success" />{seq}. 正确!</div>);
        } else {
          content.push(<div key={`rs_${v.id}`}><Badge status="error" />{seq}. 错误!</div>);
        }
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
      return 'Oops...';
    }
    return (
      <Layout>
        <Header>
          <Button type="primary" onClick={this.showInfo}>练习概况</Button>
        </Header>
        <Content style={{ padding: 15 }}>
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
