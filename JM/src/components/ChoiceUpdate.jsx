/**
 * 编辑选择题
 */
import { Drawer, Form, Input, Button, TreeSelect, Radio, Space, Checkbox, Divider } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default ({ visible, onOk, onClose, loading, choice = {} }) =>  {
  const [form] = Form.useForm();

  const handleOk = () => form.validateFields()
    .then(onOk)
    .catch(console.error);

  return (
    <Drawer
      destroyOnClose
      title="编辑题目"
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
        layout="horizontal"
        form={form}
        initialValues={{ ...choice }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          name="question"
          label="题目"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="请输入题目"
          />
        </Form.Item>
        <Divider />
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, i) => (
                <Form.Item
                  {...field}
                  label={`选项${field.fieldKey + 1}`}
                  name={[field.name, 'option']}
                  fieldKey={[field.fieldKey, 'option']}
                  rules={[{ required: true }]}
                >
                  <Input
                    addonAfter={(
                      <>
                        <Checkbox
                          onClick={(e) => {
                            const options = form.getFieldValue('options');
                            options[field.fieldKey]['correct'] = e.target.checked;
                            form.setFieldsValue({
                              options,
                            });
                          }}
                        >
                          正确
                        </Checkbox>
                        <Divider type="vertical" />
                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </>
                    )}
                  />
                </Form.Item>
              ))}
              <Form.Item wrapperCol={{ offset: 4 }}>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  增加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Drawer>
  );
}
