import styles from './index.less';

export default (props: any) => {
  return (
    <div className={styles.pageBox}>
      <div className={styles.page}>{props.children}</div>
    </div>
  );
};
