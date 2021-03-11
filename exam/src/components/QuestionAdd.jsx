/**
 * 添加题目
 */
import { Drawer, Form, Input, Button } from 'antd';

export default ({ visible, onOk, onClose, title }) =>  {
  const [form] = Form.useForm();

  const handleOk = () => form.validateFields()
    .then(onOk)
    .catch(console.error);

  const handleChangeQuestion = (e) => {
    const question = e.target.value;
    const keys = question.match(/{\w+}/g);

    const correct = keys ? keys.map(k => ({
      code: k.replace('{', '').replace('}', ''),
    })) : [];

    let fc = form.getFieldValue('correct');
    fc = fc ? fc : [];

    form.setFieldsValue({
      correct,
    });
  }

  return (
    <Drawer
      destroyOnClose
      title={`${title} - 添加题目`}
      visible={visible}
      onClose={onClose}
      width={680}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" onClick={handleOk}>
            提交
          </Button>
        </div>
      }
    >
      <Form
        preserve={false}
        layout="vertical"
        hideRequiredMark
        form={form}
      >
        <Form.Item
          name="question"
          label="题目"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="请输入题目"
            onChange={handleChangeQuestion}
          />
        </Form.Item>
        <Form.List name="correct">
          {fields => fields.map(field => {
            const fc = form.getFieldValue('correct');
            return (
              <Form.Item
                {...field}
                label={`${fc[field.key].code} - 答案`}
                name={[field.name, 'expected']}
                fieldKey={[field.fieldKey, 'expected']}
              >
                <Input />
              </Form.Item>
            );
          })}
        </Form.List>
      </Form>
    </Drawer>
  );
}
