/*
 * 填空题
 */
 import React, { PureComponent } from 'react';
 import { Input } from 'antd';

 export default ({ v, onChange }) => {
   // TODO 正则表达式分割
   const textArray = v.question.split(/{\w+}/);

   const content = [];
   textArray.forEach((t, i) => {
     content.push(t);
     if (textArray.length !== i + 1) {
       content.push(
         <Input
           defaultValue={v.answer}
           onChange={(e) => onChange(e.target.value)}
           style={{ width: 80, margin: '0 8px' }}
          />
       );
     }
   })
   return (
     <>
       {content}
     </>
   );
 };
