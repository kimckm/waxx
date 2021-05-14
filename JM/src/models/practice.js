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
    // 保存每道题的答案
    save(state, { payload }) {
      const { list } = state;
      const q = list.find(item => item.id == payload.id);
      if (typeof(payload.answer) == 'object') {
        if (!q.answer) {
          q.answer = {};
        }
        q.answer[payload.answer.code] = payload.answer.answer;
      } else {
        q.answer = payload.answer;
      }
      return {
        ...state,
        list: [...list],
      };
    },
  },
}
