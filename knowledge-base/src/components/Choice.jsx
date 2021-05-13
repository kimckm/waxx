/**
 * 选择题(单选、多选)。
 */
import { Checkbox, Row, Col } from 'antd';

// TODO
// 题干区域(提问)
// 选项区域(回答)
// 结果区域(评卷)
// 解析区域(讲解)

export default ({ v, seq, onChange }) => {
  const options = v.choiceOptions ? v.choiceOptions.map(o => (
    <Row>
      <Col span={24}>
        <Checkbox
          value={o.seq}
        >
          {`${String.fromCharCode(65 + o.seq)}. ${o.option}`}
        </Checkbox>
      </Col>
    </Row>
  )) : [];

  // TODO 一个选项占一行。
  return (
    <>
      <div>
        {seq ? `${seq + 1}、` : ''}
        {v.question}
      </div>
      <Checkbox.Group
        style={{ width: '100%' }}
        onChange={(e) => console.log(e)}
      >
        {options}
      </Checkbox.Group>
      <a>显示答案</a>
    </>
  );
};
