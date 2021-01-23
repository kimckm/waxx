/*
 * 页脚导航
 */
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default () => (
  <Tabs tabPosition="bottom">
    <TabPane tab="题卡" key="1">
      A
    </TabPane>
    <TabPane tab="下一题" key="2">
      B
    </TabPane>
  </Tabs>
);
