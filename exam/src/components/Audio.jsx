/*
 * 音频播放组件
 */
import React from 'react';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

export default ({ q }) => {
  if (!q || !q.audio) {
    return '';
  }

  const arr = q.audio.map(a => (
    <Row key={`${q.id}_${a.name}`} align="middle">
      <Col md={{ span: 2 }}>
        <Text>{a.name}</Text>
      </Col>
      <Col md={{ span: 22 }}>
        <audio
          src={a.src}
          controls="controls"
        >
          Your browser does not support the audio element.
        </audio>
      </Col>
    </Row>
  ));

  return (
    <Card style={{ marginTop: 8 }}>
      <Title level={5}>音频资料</Title>
      {arr}
    </Card>
  );
};
