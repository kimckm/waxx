import React, { PureComponent } from 'react';
import { Button, Radio } from 'antd';
import { connect } from 'umi';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

@connect(({ multipleChoice }) => ({
  v: multipleChoice.data,
}))
export default class MultipleChoice extends PureComponent {
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
        <div>
          <Button>提交</Button>
        </div>
      </div>
    );
  }
}
