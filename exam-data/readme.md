### 题库数据
初始化数据工具库。

新建填空题库
```
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '@/Users/kim/gitspace/waxx/exam-data/music/basic.json' \
    http://8.135.66.238:12276/completions
```

新建Exam
```
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '@/Users/kim/gitspace/waxx/exam-data/exam/music.json' \
    http://8.135.66.238:12276/exams
```

新建ExamQuestion
```
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{"examId":"520748154880","questionId":"1558331392"}' \
    http://localhost:12276/exam_questions
```
