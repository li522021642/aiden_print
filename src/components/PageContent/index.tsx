import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import styles from './index.less';

export default (props: any) => {
  const { setOpenTip } = useModel('global');
  const onClose = () => {
    setOpenTip(false);
  };

  useEffect(() => {
    setOpenTip(true);
  }, []);

  return (
    <div className={styles.pageBox} onClick={onClose} onContextMenu={onClose}>
      <div className={styles.page}>{props.children}</div>
    </div>
  );
};
