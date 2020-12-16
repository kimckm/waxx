import React, { PureComponent } from 'react';
import { Button, Radio } from 'antd';
import { connect } from 'umi';
import Directory from '@/components/directory';
import Question from '@/components/question';

@connect(({ multipleChoice }) => ({
  list: multipleChoice.list,
  current: multipleChoice.current,
}))
export default class MultipleChoice extends PureComponent {
  render() {
    const { list, current, dispatch } = this.props;
    return (
      <>
        <Question v={list[current - 1]} />
        <Directory
          onChange={(p) => dispatch({ type: 'multipleChoice/goto', payload: { current: p } })}
          total={list.length}
          current={current}
        />
        <Button type="primary">交卷</Button>
      </>
    );
  }
}
