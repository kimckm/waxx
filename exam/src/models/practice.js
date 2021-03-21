import { Modal, message } from 'antd';
import { random } from '@/services/practice';

export default {
  namespace: 'practice',
  state: {
    list: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(random, payload);
      yield put({ type: 'saveList', payload: res });
    },
  },
  reducers: {
    saveList(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
}
