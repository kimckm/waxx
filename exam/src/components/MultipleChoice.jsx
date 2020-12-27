/**
 * 单选题
 */
import React, { PureComponent } from 'react';
import { Radio } from 'antd';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

export default ({ v, onChange }) => (
  <div>
    <h2>{v.title}</h2>
    <Radio.Group
      defaultValue={v.answer}
      onChange={(e) => onChange(e.target.value)}
    >
      {v.options.map(o => (
        <Radio key={`${v.id}_${o.seq}`} style={radioStyle} value={o.seq}>{o.value}</Radio>
      ))}
    </Radio.Group>
  </div>
);
