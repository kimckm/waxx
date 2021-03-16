import { Modal, message } from 'antd';
import { saveOne, list, findByPage } from '@/services/question';

export default {
  namespace: 'question',
  state: {
    list: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(list, payload);
      yield put({ type: 'saveList', payload: res });
    },
    *saveOne({ payload }, { call, put }) {
      const res = yield call(saveOne, payload);
      res ? message.success('新建完成!') : message.error('出错!');
    },
    // 分页查询
    *findByPage({ payload }, {  call, put }) {
      const res = yield call(findByPage, payload);
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
