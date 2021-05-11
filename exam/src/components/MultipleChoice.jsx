/**
 * 单选题
 */
import React from 'react';
import { Radio, Card } from 'antd';

const radioStyle = {
  height: '30px',
  lineHeight: '30px',
};

export default ({ v, seq, onChange }) => (
  <Card>
    <div>
      {seq ? `${seq + 1}、` : ''}
      {v.question}
    </div>
    <Radio.Group
      style={{ padding: 15 }}
      defaultValue={v.answer}
      onChange={(e) => onChange(e.target.value)}
    >
      {v.choiceOptions.map(o => (
        <Radio
          key={`${v.id}_${o.seq}`}
          style={radioStyle}
          value={o.seq}
        >
          {`${String.fromCharCode(65 + o.seq)}. ${o.option}`}
        </Radio>
      ))}
    </Radio.Group>
  </Card>
);
