import { getIntervalRandomNumber } from '@/utils/number';
import { useEffect, useRef, useState } from 'react';
import DialogSetting from './Components/DialogSetting';
import HeaderPage from './Components/HeaderPage';
import { CONFIG } from './config';
import styles from './index.less';

const numCell = 4;
const numRow = 13;

const NumberPage: React.FC = () => {
  const [state, setState] = useState({
    num: 9,
    quick: '',
    symbol: '+',
  });
  const [data, setData] = useState([]);
  const [width] = useState(`${100 / numCell}%`);

  // 获取数据
  const getData = () => {
    const arr: any = [];
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < numCell * numRow; i++) {
      if (state.quick) {
        // 减十法
        num1 = 10;
        num2 = getIntervalRandomNumber(1, 10);
      } else {
        // 普通模式
        num1 = getIntervalRandomNumber(1, state.num);
        if (state.symbol === '-') {
          num2 = getIntervalRandomNumber(1, num1);
        } else {
          num2 = getIntervalRandomNumber(1, state.num);
        }
      }

      arr.push({
        num1,
        num2,
        symbol: state.symbol,
      });
    }
    setData(arr);
  };

  /**
   * 编辑弹框 确认回调
   * 获取设置的内容，并重新生成数据
   */
  const handlerDialogSuccess = (values: any) => {
    if (values.quick) {
      values.symbol = '-';
    }
    setState({
      ...state,
      ...values,
    });
  };

  /**
   * 刷新
   */
  const handlerRefresh = () => {
    getData();
  };
  /**
   * 显示编辑框
   */
  // 创建ref
  const refDialog: any = useRef();
  const handlerShowDialog = () => {
    refDialog.current.showDialog();
  };

  useEffect(() => {
    getData();
  }, [state]);

  return (
    <div>
      {/* 页眉 */}
      <HeaderPage emitRefresh={handlerRefresh} emitClick={handlerShowDialog} />

      <div className={styles.box} style={CONFIG.style}>
        {data.map((item: any, i: number) => {
          return (
            <div key={`${i}num`} className={styles.itemBox} style={{ width }}>
              <div className={styles.itemBoxLeft}>
                {item.num1} {item.symbol} {item.num2}
              </div>{' '}
              <div className={styles.itemBoxRight}>=</div>
            </div>
          );
        })}
      </div>

      {/* 编辑弹框 */}
      <DialogSetting ref={refDialog} onSuccess={handlerDialogSuccess} />
    </div>
  );
};

export default NumberPage;
