import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import styles from './index.less';

export default (props: any) => {
  const { setOpenTip } = useModel('global');
  const onClose = () => {
    setOpenTip(false);
  };

  // 定义键盘事件处理函数
  const handleKeyDown = (event: KeyboardEvent) => {
    console.log(`按下了键：${event.key}`);
    onClose();
  };

  useEffect(() => {
    setOpenTip(true);
    // 添加键盘事件监听器
    window.addEventListener('keydown', handleKeyDown);

    // 组件卸载时清除事件监听器
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.pageBox} onClick={onClose} onContextMenu={onClose}>
      <div className={styles.page}>{props.children}</div>
    </div>
  );
};
