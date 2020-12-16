import React, { PureComponent } from 'react';
import { Radio } from 'antd';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

export default ({ v }) => (
  <div>
    <h2>{v.question}</h2>
    <Radio.Group>
      {v.options.map(o => (
        <Radio style={radioStyle} value={o.seq}>{o.value}</Radio>
      ))}
    </Radio.Group>
  </div>
);
