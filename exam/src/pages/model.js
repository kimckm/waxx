export default {
  namespace: 'multipleChoice',
  state: {
    list: [{
      id: 1,
      title: "国际标准音A的音高频率是多少？",
      correct: "C",
      options: [
        { seq: "A", value: "430HZ" },
        { seq: "B", value: "435HZ" },
        { seq: "C", value: "440HZ" },
        { seq: "D", value: "445HZ" },
      ],
      type: 2, // 单选题
    }, {
      id: 2,
      title: "2s国际标准音A的音高频率是多少？",
      correct: "C",
      options: [
        { seq: "A", value: "1430HZ" },
        { seq: "B", value: "1435HZ" },
        { seq: "C", value: "1440HZ" },
        { seq: "D", value: "1445HZ" },
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
    saveChoice(state, { payload }) {
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
