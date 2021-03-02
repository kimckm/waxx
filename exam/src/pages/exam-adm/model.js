import { Modal } from 'antd';
import { saveOne } from './service'

export default {
  namespace: 'question',
  state: {

  },
  effects: {
    *saveOne({ payload }, { call, put }) {
      const res = yield call(saveOne, payload);
      console.log(res);
    },
  },
  reducers: {
  },
}
