import React, { PureComponent } from 'react';
import { Button, Radio } from 'antd';
import { connect } from 'umi';
import Directory from '@/components/directory';
import Question from '@/components/question';

@connect(({ multipleChoice }) => ({
  v: multipleChoice.data,
}))
export default class MultipleChoice extends PureComponent {
  render() {
    const { v } = this.props;
    return (
      <div>
        <Question v={v} />
        <div>
          <Directory />
          <Button type="primary">交卷</Button>
        </div>
      </div>
    );
  }
}
