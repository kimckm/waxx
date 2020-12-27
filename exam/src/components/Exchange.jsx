/*
 * 题目交换机
 */
import React, { PureComponent } from 'react';
import { Radio } from 'antd';

import MultipleChoice from './MultipleChoice';
import FillIn from './FillIn';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

export default (props) => {
  switch (props.v.type) {
    case 1:
      return (<FillIn {...props} />);
    case 2:
      return (<MultipleChoice {...props} />);
    default:
      return (<MultipleChoice {...props} />);
  }
};
