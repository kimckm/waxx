import { Modal, message } from 'antd';
import { saveOne, findByPage, findCatalog } from '@/services/topic';

export default {
  namespace: 'topic',
  state: {
    list: [],
    page: {
      current: 1,
      size: 20,
      total: 0,
    },

    topic: {},
    catalogList: [],
  },
  effects: {
    *saveOne({ payload }, { call, put }) {
      const res = yield call(saveOne, payload);
      res ? message.success('新建完成!') : message.error('出错!');
    },
    // 分页查询
    *findByPage({ payload }, {  call, put }) {
      const res = yield call(findByPage, payload);
      yield put({ type: 'saveList', payload: res });
    },
    *findCatalog({ payload }, { call, put }) {
      const res = yield call(findCatalog, {
        topicId: payload.id,
        pagination: false,
      });
      yield put({
        type: 'saveCatalog',
        payload: {
          topic: payload,
          catalogList: res,
        },
      });
    },
  },
  reducers: {
    clearCatalog(state) {
      return {
        ...state,
        topic: {},
        catalogList: [],
      };
    },
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
    saveCatalog(state, { payload }) {
      return {
        ...state,
        topic: payload.topic,
        catalogList: payload.catalogList,
      };
    },
  },
}
