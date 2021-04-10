/**
 * 添加主题
 */
import { Drawer, Form, Input, Button } from 'antd';

export default ({ visible, onOk, onClose, loading }) =>  {
  const [form] = Form.useForm();

  const handleOk = () => form.validateFields()
    .then(onOk)
    .catch(console.error);

  return (
    <Drawer
      destroyOnClose
      title="创建主题"
      visible={visible}
      onClose={onClose}
      width={680}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" onClick={handleOk} loading={loading}>
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
          name="title"
          label="标题"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="请输入标题"
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
