import React, { PureComponent } from 'react';
import { Button } from 'antd';

export default class Directory extends PureComponent {
  render() {
    return (
      <>
        <Button shape="circle">1</Button>
        <Button shape="circle">2</Button>
        <Button shape="circle">3</Button>
      </>
    );
  }
}
