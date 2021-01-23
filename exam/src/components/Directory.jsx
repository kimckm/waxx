/*
 * 题卡
 */
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

export default ({ onChange, total, current }) => {
  const btnContent = [];
  for (var i = 0; i < total; i++) {
    const n = i + 1;
    btnContent.push(
      <Col key={`dir_${n}`} span={4}>
        <Button
          size="small"
          shape="circle"
          type={current === i + 1 ? 'primary': 'default'}
          style={{ width: 30, height: 30 }}
          onClick={() => onChange(n)}
        >
          {n}
        </Button>
      </Col>
    );
  }
  return (
    <Card
      title="答题卡"
    >
      <Row gutter={[4, 8]}>{btnContent}</Row>
    </Card>
  );
};
