import { Modal } from 'antd';
import { list } from '@/services/exam'

export default {
  namespace: 'exam',
  state: {
    list: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(list, payload);
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
