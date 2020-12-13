import React, { PureComponent } from 'react';
import { Radio } from 'antd';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

export default class Question extends PureComponent {
  render() {
    const { v } = this.props;
    return (
      <div>
        <h2>{v.question}</h2>
        <Radio.Group>
          {v.options.map(o => (
            <Radio style={radioStyle} value={o.seq}>{o.value}</Radio>
          ))}
        </Radio.Group>
      </div>
    );
  }
}
