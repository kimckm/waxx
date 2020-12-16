import React from 'react';
import { Pagination } from 'antd';

export default ({ onChange, total, current }) => (
  <Pagination
    current={current}
    pageSize={1}
    total={total}
    onChange={onChange}
  />
);
