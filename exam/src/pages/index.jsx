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
    const q = list[current - 1];
    return (
      <>
        <Question
          key={q.id}
          v={q}
          onChange={(v) => dispatch({ type: 'multipleChoice/saveChoice', payload: { id: q.id, answer: v } })}
        />
        <Directory
          onChange={(p) => dispatch({ type: 'multipleChoice/goto', payload: { current: p } })}
          total={list.length}
          current={current}
        />
        <Button type="primary" onClick={() => console.log(list)}>交卷</Button>
      </>
    );
  }
}
