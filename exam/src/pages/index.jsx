/**
 * 考试页面
 */
import React, { PureComponent } from 'react';
import { Button, Radio, Layout, Modal, Badge, Row, Col, Menu } from 'antd';
import { connect } from 'umi';
import Directory from '@/components/Directory';
import Exchange from '@/components/Exchange';
import Audio from '@/components/Audio';

const { Header, Footer, Content, Sider } = Layout;

@connect(({ exam }) => ({
  list: exam.list,
  current: exam.current,
}))
export default class Exam extends PureComponent {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'exam/query' });
  }

  render() {
    const { list, current, dispatch } = this.props;
    if (!list || list.length === 0) {
      return 'Oops...';
    }
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['practice']}>
            <Menu.Item key="practice">练习</Menu.Item>
            <Menu.Item key="exam">考试</Menu.Item>
          </Menu>
        </Header>
        <Content style={{
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 80,
        }}>
          <Row gutter={8} justify="space-between">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }}>
              {list.map((q, seq) => (
                <div style={{ marginBottom: 30 }}>
                  <Exchange
                    key={q.id}
                    seq={seq}
                    v={q}
                    onChange={(v) => dispatch({ type: 'exam/save', payload: { id: q.id, answer: v } })}
                  />
                  <Audio q={q} />
                </div>
              ))}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
              <Directory
                onChange={(p) => dispatch({ type: 'exam/goto', payload: { current: p } })}
                list={list}
                current={current}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
