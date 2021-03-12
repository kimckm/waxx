/**
 * 考试页面
 */
import React, { PureComponent } from 'react';
import { Row, Col, Space } from 'antd';
import { connect, history } from 'umi';
import Directory from '@/components/Directory';
import Exchange from '@/components/Exchange';
import Audio from '@/components/Audio';

@connect(({ question }) => ({
  list: question.list,
}))
export default class Exam extends PureComponent {
  render() {
    const { list, dispatch } = this.props;
    return (
      <Row gutter={8} justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }}>
          <Space direction="vertical">
            {list.map((q, seq) => (
              <div key={q.id}>
                <Exchange
                  seq={seq}
                  v={q}
                  onChange={(v) => dispatch({ type: 'question/save', payload: { id: q.id, answer: v } })}
                />
                <Audio q={q} />
              </div>
            ))}
          </Space>
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
