import { InfoCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Tooltip } from 'antd';
import styles from './index.less';

interface Props {
  emitClick: () => void;
  emitRefresh: () => void;
  count?: number;
}

export default function (props: Props) {
  const { emitClick, emitRefresh, count } = props;
  const { openTip } = useModel('global');

  return (
    <div className={styles.info}>
      <div className={styles.name} onClick={() => emitClick()}>
        <Tooltip title="点击可修改" open={openTip}>
          <InfoCircleOutlined
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
        </Tooltip>
        姓名：
      </div>
      <div className={styles.date} onClick={() => emitRefresh()}>
        <Tooltip title="点击可刷新" open={openTip}>
          <InfoCircleOutlined
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
        </Tooltip>
        {count && <>({count})</>}
        日期：
      </div>
    </div>
  );
}
