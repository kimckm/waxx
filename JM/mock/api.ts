export default {
  // 题目列表
  'GET /api/exams/1': {
    title: '模拟考试',
    questions: [{
      id: 1,
      title: "中国的首都城市是 {0} 。",
      correct: [{
        seq: 0,
        correct: "北京",
      }],
      type: 1, // 填空题
      // answer: [{
      //   seq: 0,
      //   answer: "北京",
      // }],
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
      // answer: "C",
    }, {
      id: 3,
      title: "以下哪项不属于Spring Cloud Gateway的Glossary ?",
      correct: "D",
      options: [
        { seq: "A", value: "Route" },
        { seq: "B", value: "Predicate" },
        { seq: "C", value: "Filter" },
        { seq: "D", value: "Interceptor" },
      ],
      type: 2,
    }],
  },
}
