import Circle from '@/components/Charts/Circle';
import PageContent from '@/components/PageContent';
import User from '@/components/User';
import { getRndInteger } from '@/utils';
import { useEffect, useState } from 'react';
import style from './index.less';

export default function () {
  const numCell = 5;
  const numRow = 7;
  const [row, setRow] = useState([]);

  // 生成数字数组
  const getNums = (): any => {
    const arr: any = [];
    for (let i = 0; i < numCell * numRow; i++) {
      arr.push(i);
    }
    return arr;
  };

  const init = () => {
    const arr = getNums();
    setRow(arr);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <PageContent>
      <User emitClick={() => {}} emitRefresh={() => init()} />
      <div className={style.box}>
        {row.map((i: number) => {
          return <Circle key={i} number={getRndInteger(3, 11)} />;
        })}
      </div>
    </PageContent>
  );
}
