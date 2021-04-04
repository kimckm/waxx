import { Tree, Modal } from 'antd';

const getChildren = (id, array) => {
  const children = [];
  array.forEach(n => {
    if (n.pid == id) {
      children.push(n);
    }
  });

  children.forEach(c => {
    const subChildren = getChildren(c.id, array);
    if (subChildren.length > 0) {
      c.children = subChildren;
    }
  });

  return children;
};

const CatalogTree = ({ visible, onClose, topic, catalogList }) => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  const treeData = [];
  catalogList.forEach(c => {
    c.key = c.id;
    if (c.pid) {
      return;
    }
    c.children = getChildren(c.id, catalogList);
    treeData.push(c);
  });


  return (
    <Modal
      title={`目录 - ${topic.title}`}
      visible={visible}
      onCancel={onClose}
      destroyOnClose
    >
      <Tree
        // defaultExpandAll
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    </Modal>
  );
};

export default CatalogTree;
