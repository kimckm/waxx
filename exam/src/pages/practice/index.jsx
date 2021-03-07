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

@connect(({ question }) => ({
  list: question.list,
}))
export default class Exam extends PureComponent {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'question/query',
  //     payload: this.props.location.query.examId,
  //   });
  // }
  render() {
    const { list, dispatch } = this.props;
    return (
      <Row gutter={8} justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }}>
          {list.map((q, seq) => (
            <div key={q.id} style={{ marginBottom: 30 }}>
              <Exchange
                seq={seq}
                v={q}
                onChange={(v) => dispatch({ type: 'question/save', payload: { id: q.id, answer: v } })}
              />
              <Audio q={q} />
            </div>
          ))}
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
          <Directory
            list={list}
          />
        </Col>
      </Row>
    );
  }
}
