import { getRndInteger } from '@/utils';
import style from './index.module.less';

export default function (props: { number: number }) {
  const { number } = props;
  const arr = Array.from({ length: number }, (v, i) => i);
  return (
    <div
      className={[style.chartItem, style[`item${getRndInteger(1, 4)}`]].join(
        ' ',
      )}
    >
      {arr.map((i) => {
        return <div key={`${i}Circle`} className={style.item} />;
      })}
    </div>
  );
}
