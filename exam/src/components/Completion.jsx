/*
 * 填空题
 */
import React from 'react';
import { Input, Card } from 'antd';

export default ({ v, onChange, seq }) => {
  const textArray = v.question.split(/{\w+}/);
  const keys = v.question.match(/{\w+}/g);

  const content = [];
  textArray.forEach((t, i) => {
    content.push(t);
    let k = keys[i];
    if (k) {
      k = k.replace('{', '').replace('}', '');
      content.push(
        <Input
          key={`${v.id}_${k}`}
          defaultValue={v.answer ? v.answer[k] : ''}
          onChange={(e) => onChange({ code: k, answer: e.target.value})}
          style={{
            width: 80,
            margin: '0 8px',
          }}
        />
      );
      // content.push(
      //   <Typography.Text
      //     key={`${v.id}_${k}`}
      //     editable={{
      //       onChange: (value) => onChange({ code: k, answer: value}),
      //     }}
      //   >
      //     {v.answer ? v.answer[k] : ''}
      //   </Typography.Text>
      // );
    }
  })
  return (
    <Card>
      {seq + 1}、{content}
    </Card>
  );
};
