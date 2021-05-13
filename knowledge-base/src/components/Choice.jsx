/**
 * 选择题(单选、多选)。
 */
import React from 'react';
import { Checkbox, Card } from 'antd';

const radioStyle = {
  height: '30px',
  lineHeight: '30px',
};

export default ({ v, seq, onChange }) => {
  const options = v.choiceOptions.map(o => ({
    label: `${String.fromCharCode(65 + o.seq)}. ${o.option}`,
    value: o.seq,
  }));

  // TODO 一个选项占一行。
  return (
    <Card>
      <div>
        {seq ? `${seq + 1}、` : ''}
        {v.question}
      </div>
      <Checkbox.Group
        options={options}
        onChange={(e) => console.log(e)}
      />
    </Card>
  );
};
