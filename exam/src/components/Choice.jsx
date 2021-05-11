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

  return (
    <Card>
      <div>
        {seq ? `${seq + 1}、` : ''}
        {v.question}
      </div>
      <Checkbox.Group
        options={options}
        onChange={(e) => onChange(e.target.value)}
      />
    </Card>
  );
};
