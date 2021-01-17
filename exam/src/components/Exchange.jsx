/*
 * 题目交换机
 */
import React, { PureComponent } from 'react';
import { Radio } from 'antd';

import MultipleChoice from './MultipleChoice';
import Completion from './Completion';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

export default (props) => {
  switch (props.v.type) {
    case 1:
      return (<Completion {...props} />);
    case 2:
      return (<MultipleChoice {...props} />);
    default:
      return (<Completion {...props} />);
  }
};
