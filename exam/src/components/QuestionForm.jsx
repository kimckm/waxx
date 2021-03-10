/**
 * 添加题目
 */
import { Modal, Form, Input } from 'antd';

export default ({ visible, onOk, onCancel, title }) =>  {
  const [form] = Form.useForm();

  const handleOk = () => form.validateFields().then(onOk);

  return (
    <Modal
      destroyOnClose
      title={`${title} - 添加题目`}
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form
        preserve={false}
        layout="vertical"
        hideRequiredMark
        form={form}
      >
        <Form.Item name="question" label="题目" rules={[{ required: true }]}>
          <Input.TextArea
            rows={4}
            placeholder="请输入题目"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
