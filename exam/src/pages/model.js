import { Modal } from 'antd';

export default {
  namespace: 'exam',
  state: {
    list: [{
      id: 1,
      title: "中国的首都城市是 {0} 。",
      correct: "北京",
      type: 1, // 填空题
    }, {
      id: 2,
      title: "中国有多少个省份？",
      correct: "C",
      options: [
        { seq: "A", value: "21" },
        { seq: "B", value: "22" },
        { seq: "C", value: "23" },
        { seq: "D", value: "24" },
      ],
      type: 2, // 单选题
    }],
    current: 1, // 当前题目
  },
  reducers: {
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
      const i = list.findIndex(item => item.id == payload.id);
      list[i].answer = payload.answer;
      return {
        ...state,
        list: [...list],
      };
    },
  },
}
