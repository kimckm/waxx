/*
 * 试卷管理
 */
import React, { PureComponent } from 'react';
import { Table, Card, Drawer, Form, Row, Col, Input, Button } from 'antd';
import { connect } from 'umi';
import QuestionForm from '@/components/QuestionForm';

@connect(({ exam }) => ({
  examList: exam.list,
}))
export default class ExamAdm extends PureComponent {
  state = {
    addQuestionVisible: false,
    exam: {}, // 当前操作的试卷
    question: '', // 正在编辑的题目
    correct: [], // 答案
  }

  showAddQuestionDrawer = (exam) => this.setState({ addQuestionVisible: true, exam });
  closeAddQuestionDrawer = () => this.setState({
    addQuestionVisible: false,
    exam: {},
    question: '',
    correct: [],
  });

  handleChangeQuestion = (e) => {
    const question = e.target.value;
    const keys = question.match(/{\w+}/g);
    this.setState({
      question,
      correct: keys ? keys.map(k => ({
        code: k.replace('{', '').replace('}', ''),
      })) : [],
    });
  }

  handleChangeCorrect = (code, expected) => {
    const { correct } = this.state;
    const t = correct.find(c => c.code === code);
    t.expected = expected;
    this.setState({ correct: [...correct] });
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { exam, question, correct } = this.state;
    console.log(this.state);
    // dispatch({
    //   type: 'question/saveOne',
    //   payload: {
    //     examId: exam.id,
    //     question,
    //     correct,
    //   },
    // })
    //   .then(this.closeAddQuestionDrawer);
  }

  render() {
    const { examList } = this.props;
    const dataSource = examList.map(exam => ({
      ...exam,
      key: exam.id,
    }));

    const columns = [
      {
        title: '#',
        key: 'operation',
        width: 100,
        render: (exam) => <a onClick={() => this.showAddQuestionDrawer(exam)}>添加题目</a>
      },
      {
        title: '试卷标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '创建时间',
        dataIndex: 'createAt',
        key: 'createAt',
        width: 180,
      }
    ];

    return (
      <Card>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
          size="middle"
        />
        <QuestionForm
          title={this.state.exam.title}
          visible={this.state.addQuestionVisible}
          onCancel={this.closeAddQuestionDrawer}
          onOk={(form) => console.log(form)}
        />
        <Drawer
          title={`${this.state.exam.title} - 添加题目`}
          width={800}
          onClose={this.closeAddQuestionDrawer}
          // visible={this.state.addQuestionVisible}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button type="primary" onClick={this.handleSubmit}>
                提交
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="question"
                  label="题目"
                  rules={[{ required: true, message: '请输入题目' }]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="请输入题目"
                    onChange={this.handleChangeQuestion}
                  />
                </Form.Item>
              </Col>
            </Row>
            {this.state.correct.map(c => (
              <Row gutter={16} key={c.code}>
                <Col span={24}>
                  <Form.Item
                    name={c.code}
                    label={`${c.code} - 答案`}
                    rules={[
                      {
                        required: true,
                        message: '请输入答案',
                      },
                    ]}
                  >
                    <Input
                      placeholder="请输入答案"
                      onChange={(e) => this.handleChangeCorrect(c.code, e.target.value)}
                    />
                  </Form.Item>
                </Col>
              </Row>
            ))}
          </Form>
        </Drawer>
      </Card>
    );
  }
}
