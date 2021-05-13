/*
 * 题目预览
 */
import Exchange from './Exchange';
import { Modal } from 'antd';

export default (props) => (
  <Modal
    title="预览"    
    visible={props.visible}
    onCancel={props.onClose}
  >
    <Exchange v={props.v} />
  </Modal>
);
