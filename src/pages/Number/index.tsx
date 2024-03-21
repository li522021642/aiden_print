import PageContent from '@/components/PageContent';
import { getIntervalRandomNumber } from '@/utils/number';
import { useEffect, useRef, useState } from 'react';
import DialogSetting from './Components/DialogSetting';
import HeaderPage from './Components/HeaderPage';
import { CONFIG } from './config';
import styles from './index.less';

const numCell = 3;
const numRow = 16;

const NumberPage: React.FC = () => {
  const [state, setState] = useState({
    num: 9,
    count: 2,
    quick: '',
    symbol: '+',
  });
  const [data, setData] = useState([]);
  const [width] = useState(`${100 / 3}%`);

  // 获取数据
  const getData = () => {
    const arr: any = [];
    let num1 = 0;
    let num2 = 0;
    let num3 = null;
    let symbol = state.symbol;
    let symbol2 = '';
    if (state.quick === '1' || state.quick === '3') {
      symbol = '-';
    }
    for (let i = 0; i < numCell * numRow; i++) {
      if (state.quick === '1') {
        // 减十法
        num1 = 10;
        num2 = getIntervalRandomNumber(1, 10);
      } else if (state.quick === '2') {
        // 连续加法3
        symbol2 = '+';
        num1 = getIntervalRandomNumber(1, state.num);
        num2 = getIntervalRandomNumber(1, state.num);
        num3 = getIntervalRandomNumber(1, state.num);
      } else if (state.quick === '3') {
        // 连续减法3
        symbol2 = '-';
        num1 = getIntervalRandomNumber(4, state.num);
        num2 = getIntervalRandomNumber(1, num1);
        num3 = getIntervalRandomNumber(1, num1 - num2);
      } else if (state.quick === '4') {
        // 混合加减法3
        symbol = Math.random() > 0.5 ? '+' : '-';
        symbol2 = Math.random() > 0.5 ? '+' : '-';
        if (symbol === '-' && symbol2 === '-') {
          num1 = getIntervalRandomNumber(4, state.num);
          num2 = getIntervalRandomNumber(1, num1);
          num3 = getIntervalRandomNumber(1, num1 - num2);
        }
        if (symbol === '+' && symbol2 === '+') {
          num1 = getIntervalRandomNumber(1, state.num);
          num2 = getIntervalRandomNumber(1, state.num);
          num3 = getIntervalRandomNumber(1, state.num);
        }
        if (symbol === '+' && symbol2 === '-') {
          num1 = getIntervalRandomNumber(1, state.num);
          num2 = getIntervalRandomNumber(1, state.num);
          num3 = getIntervalRandomNumber(1, num1);
        }
        if (symbol === '-' && symbol2 === '+') {
          num1 = getIntervalRandomNumber(4, state.num);
          num2 = getIntervalRandomNumber(1, num1);
          num3 = getIntervalRandomNumber(1, state.num);
        }
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
        num3,
        symbol: symbol,
        symbol2: symbol2,
      });
    }
    setData(arr);
  };

  /**
   * 编辑弹框 确认回调
   * 获取设置的内容，并重新生成数据
   */
  const [styleMin, setStyleMin] = useState(false);
  const handlerDialogSuccess = (values: any) => {
    if (values.quick === '1' || values.quick === '3') {
      values.symbol = '-';
    }
    if (values.quick === '2') {
      values.symbol = '+';
    }
    setStyleMin(!!values.quick);
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
    <PageContent>
      <div>
        {/* 页眉 */}
        <HeaderPage
          emitRefresh={handlerRefresh}
          emitClick={handlerShowDialog}
        />

        <div
          className={styles.box}
          style={styleMin ? CONFIG.styleMin : CONFIG.style}
        >
          {data.map((item: any, i: number) => {
            return (
              <div key={`${i}num`} className={styles.itemBox} style={{ width }}>
                <div className={styles.itemBoxLeft}>
                  {item.num1} {item.symbol} {item.num2}{' '}
                  {item.symbol2 ? item.symbol2 + ' ' + item.num3 : ''}
                </div>{' '}
                <div className={styles.itemBoxRight}>=</div>
              </div>
            );
          })}
        </div>

        {/* 编辑弹框 */}
        <DialogSetting ref={refDialog} onSuccess={handlerDialogSuccess} />
      </div>
    </PageContent>
  );
};

export default NumberPage;
