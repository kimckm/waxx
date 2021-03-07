/*
 * 题卡
 */
import React from 'react';
import { Affix, Card, Button, Row, Col, Badge } from 'antd';

export default ({ onChange, list }) => {
  const btnContent = [];

  for (let i = 0; i < list.length; i++) {
    const v = list[i];
    const seq = i + 1;
    //  尚未作答
    if (!v.answer) {
      btnContent.push(
        <Col key={`dir_${seq}`} span={4}>
          <Badge count={seq} style={{ backgroundColor: '#fff', boxShadow: '0 0 0 1px #d9d9d9 inset', color: '#999' }} />
        </Col>
      );
      continue;
    }

    // 填空题判断
    let flag = true;
    if (typeof(v.answer) === 'object') {
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
    }

    const style = {};
    if (flag) {
      style.backgroundColor = '#52c41a';
    }

    btnContent.push(
      <Col key={`dir_${seq}`} span={4}>
        <Badge count={seq} style={style} />
      </Col>
    );
  }
  return (
    <Affix offsetTop={80}>
      <Card
        title="答题卡"
      >
        <Row gutter={[4, 8]}>{btnContent}</Row>
      </Card>
    </Affix>
  );
};
