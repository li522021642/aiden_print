import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from './index.less';

interface Props {
  emitClick: () => void;
  emitRefresh: () => void;
}

export default function (props: Props) {
  const { emitClick, emitRefresh } = props;
  return (
    <div className={styles.info}>
      <div className={styles.name} onClick={() => emitClick()}>
        <Tooltip title="点击可修改">
          <InfoCircleOutlined
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
        </Tooltip>
        姓名：
      </div>
      <div className={styles.date} onClick={() => emitRefresh()}>
        <Tooltip title="点击可刷新">
          <InfoCircleOutlined
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
        </Tooltip>
        日期：
      </div>
    </div>
  );
}
