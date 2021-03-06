/*
 * 题目显示交换机
 */
import Choice from './Choice';
import Completion from './Completion';

export default (props) => {
  switch (props.v.type) {
    case 'completion':
      return (<Completion {...props} />);
    case 'choice':
      return (<Choice {...props} />);
    default:
      return (<Completion {...props} />);
  }
};
