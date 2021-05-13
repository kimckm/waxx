import { Modal, message } from 'antd';
import { saveOne, list, findByPage } from '@/services/question';

export default {
  namespace: 'question',
  state: {
    list: [],
    page: {
      current: 1,
      size: 20,
      total: 0,
    },
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
        list: payload.list,
        page: {
          current: payload.current,
          size: payload.size,
          total: payload.total,
        },
      };
    },
  },
}
