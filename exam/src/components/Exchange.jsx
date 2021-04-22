/*
 * 题目显示交换机
 */
import React, { PureComponent } from 'react';
import { Radio } from 'antd';

import MultipleChoice from './MultipleChoice';
import Completion from './Completion';

export default (props) => {
  switch (props.v.type) {
    case 'completion':
      return (<Completion {...props} />);
    case 'choice':
      return (<MultipleChoice {...props} />);
    default:
      return (<Completion {...props} />);
  }
};
