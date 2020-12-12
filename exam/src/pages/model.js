export default {
  namespace: 'multipleChoice',
  state: {
    data: {
      question: "国际标准音A的音高频率是多少？",
      answer: "C",
      options: [
        { seq: "A", value: "430HZ" },
        { seq: "B", value: "435HZ" },
        { seq: "C", value: "440HZ" },
        { seq: "D", value: "445HZ" },
      ],
      type: 2, // 单选题
    },
  },
  reducers: {

  },
}
