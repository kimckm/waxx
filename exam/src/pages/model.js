import { Modal } from 'antd';
import { list } from '@/services/exam'

export default {
  namespace: 'exam',
  state: {
    list: [],
    current: 1, // 当前题目
  },
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(list);
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
    // 跳转题目
    goto(state, { payload }) {
      return {
        ...state,
        current: payload.current,
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
