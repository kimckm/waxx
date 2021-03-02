### 题库数据
初始化数据工具库。

新建填空题
```
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '@/home/kim/gitspace/waxx/exam-data/stock/a.json' \
    http://8.135.66.238:12276/completions
```

新建Exam
```
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '@/home/kim/gitspace/waxx/exam-data/exam/stock.json' \
    http://8.135.66.238:12276/exams
```

新建ExamQuestion
```
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{"examId":"545844772864","questionId":"640287916032"}' \
    http://8.135.66.238:12276/exam_questions
```
