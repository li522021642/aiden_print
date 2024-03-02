import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import style from './index.module.less';

interface Props {
  emitClick: () => void;
  emitRefresh: () => void;
}

export default function (props: Props) {
  const { emitClick, emitRefresh } = props;
  return (
    <div className={style.info}>
      <div className={style.name} onClick={() => emitClick()}>
        <Tooltip title="点击可修改">
          <InfoCircleOutlined
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
        </Tooltip>
        姓名：
        <div className={style.line} />
      </div>
      <div className={style.date} onClick={() => emitRefresh()}>
        <Tooltip title="点击可刷新">
          <InfoCircleOutlined
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
        </Tooltip>
        日期：
        <div className={style.line} />
      </div>
    </div>
  );
}
