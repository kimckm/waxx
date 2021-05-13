import { Tree, Modal } from 'antd';

const getChildren = (id, catalogList) => {
  const children = [];
  catalogList.forEach(catalog => {
    if (catalog.pid == id) {
      children.push({
        ...catalog,
        key: catalog.id,
      });
    }
  });

  children.forEach(n => {
    const subChildren = getChildren(n.id, catalogList);
    if (subChildren.length > 0) {
      n.children = subChildren;
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
  catalogList.forEach(catalog => {
    if (catalog.pid) {
      return;
    }

    const n = {
      ...catalog,
      key: catalog.id,
    };
    n.children = getChildren(n.id, catalogList);
    treeData.push(n);
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
