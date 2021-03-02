/**
 * 考试页面
 */
import React, { PureComponent } from 'react';
import { Button, Radio, Layout, Modal, Badge, Row, Col, Menu } from 'antd';
import { connect, history } from 'umi';
import Directory from '@/components/Directory';
import Exchange from '@/components/Exchange';
import Audio from '@/components/Audio';

const { Header, Footer, Content, Sider } = Layout;

@connect(({ exam }) => ({
  list: exam.list,
  current: exam.current,
}))
export default class Exam extends PureComponent {
  render() {
    const { list, current, dispatch } = this.props;
    return (
      <Row gutter={8} justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }}>
          {list.map((q, seq) => (
            <div key={q.id} style={{ marginBottom: 30 }}>
              <Exchange
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
    );
  }
}
