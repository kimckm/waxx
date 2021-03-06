/**
 * 添加题目
 */
import { Drawer, Form, Input, Button, TreeSelect, Radio, Space, Checkbox, Divider } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const getChildren = (id, catalogList) => {
  const children = [];
  catalogList.forEach(catalog => {
    if (catalog.pid == id) {
      children.push({
        ...catalog,
        value: catalog.id,
      });
    }
  });

  children.forEach(n => {
    const subChildren = getChildren(n.id, catalogList);
    if (subChildren.length > 0) {
      n.disabled = true;
      n.children = subChildren;
    }
  });

  return children;
};

export default ({ visible, onOk, onClose, loading, topic, catalogList = [] }) =>  {
  const [form] = Form.useForm();

  const handleOk = () => form.validateFields()
    .then(onOk)
    .catch(console.error);

  const handleChangeQuestion = (e) => {
    const question = e.target.value;
    const keys = question.match(/{\w+}/g);

    let fc = form.getFieldValue('correct');
    fc = fc ? fc : [];

    const correct = keys ? keys.map(k => {
      const code = k.replace('{', '').replace('}', '');
      const exist = fc.find(c => c.code == code);
      return {
        code,
        expected: exist ? exist.expected : '',
      };
    }) : [];

    form.setFieldsValue({
      correct,
    });
  }

  const treeData = [];
  catalogList.forEach(catalog => {
    if (catalog.pid) {
      return;
    }

    const n = {
      ...catalog,
      value: catalog.id,
    };
    n.children = getChildren(n.id, catalogList);
    if (n.children.length > 0) {
      n.disabled = true;
    }
    treeData.push(n);
  });

  return (
    <Drawer
      destroyOnClose
      title={`添加题目 ${topic ? topic.title : ''}`}
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
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        {catalogList.length > 0
          ? (
              <Form.Item
                name="catalogId"
                label="主题目录"
                rules={[{ required: true }]}
              >
                <TreeSelect
                  allowClear
                  treeDefaultExpandAll
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeData}
                />
              </Form.Item>
            )
          : ''}
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
        <Divider />
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
                <Input autoComplete="off" />
              </Form.Item>
            );
          })}
        </Form.List>
      </Form>
    </Drawer>
  );
}
