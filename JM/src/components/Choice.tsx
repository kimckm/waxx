/**
 * 选择题(单选、多选)。
 */
import { Checkbox, Row, Col } from 'antd'

// 选择题
interface Choice {
  question: string
  choiceOptions: ChoiceOption[]
}

interface ChoiceOption {
  seq: number
  option: string
}

interface OnChange {
  (): void
}

// 提问者
const Question = (seq: number, choice: Choice) => (
  <>
    {seq ? `${seq + 1}、` : ''}
    {choice.question}
  </>
)

// 应答
const Respond = (choice: Choice) => {
  const { choiceOptions } = choice;
  const options = choiceOptions ? choiceOptions.map(o => (
    <Row>
      <Col span={24}>
        <Checkbox
          value={o.seq}
        >
          {`${String.fromCharCode(65 + o.seq)}. ${o.option}`}
        </Checkbox>
      </Col>
    </Row>
  )) : []

  return (
    <Checkbox.Group
      style={{ width: '100%' }}
      onChange={(e) => console.log(e)}
    >
      {options}
    </Checkbox.Group>
  )
}

// 答题结果
const Result = () => ('')

// 讲解
const Explainer = () => (<a>显示答案</a>)

export default ({
  v: Choice,
  seq: number,
  onChange: OnChange
}) => (
  <>
    <Question seq={seq} choice={v} />
    <Respond choice={v} />
    <Result />
    <Explainer choice={v} />
  </>
)
