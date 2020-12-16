export default {
  namespace: 'multipleChoice',
  state: {
    list: [{
      question: "国际标准音A的音高频率是多少？",
      answer: "C",
      options: [
        { seq: "A", value: "430HZ" },
        { seq: "B", value: "435HZ" },
        { seq: "C", value: "440HZ" },
        { seq: "D", value: "445HZ" },
      ],
      type: 2, // 单选题
    }, {
      question: "2s国际标准音A的音高频率是多少？",
      answer: "C",
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
    goto(state, { payload }) {
      return {
        ...state,
        current: payload.current,
      };
    },
  },
}
