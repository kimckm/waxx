/*
 * 题目预览
 */
import Exchange from './Exchange';
import { Modal } from 'antd';

export default (props) => (
  <Modal
    visible={props.visible}
    onCancel={props.onClose}
    width={800}
    destroyOnClose
    footer={null}
  >
    <Exchange v={props.v} />
  </Modal>
);
