import PageContent from '@/components/PageContent';
import React, { useEffect, useRef, useState } from 'react';
import HeaderPage from '../Number/Components/HeaderPage';
import DialogSetting from './components/DialogSetting';
import styles from './index.less';

const generateSudoku = (difficulty: string): number[][] => {
  // 生成一个空的9x9数独盘
  const sudoku = Array.from(Array(9), () => Array(9).fill(0));

  // 检查当前位置是否可填入数字
  const isValid = (row: number, col: number, num: number): boolean => {
    // 检查行是否有重复
    for (let i = 0; i < 9; i++) {
      if (sudoku[i][col] === num) {
        return false;
      }
    }

    // 检查列是否有重复
    for (let j = 0; j < 9; j++) {
      if (sudoku[row][j] === num) {
        return false;
      }
    }

    // 检查当前3x3的格子是否有重复
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (sudoku[i][j] === num) {
          return false;
        }
      }
    }

    return true;
  };

  // 打乱数字的顺序
  const shuffle = (array: number[], difficulty: string): number[] => {
    let count = 0;
    switch (difficulty) {
      case 'easy':
        count = 40;
        break;
      case 'medium':
        count = 35;
        break;
      case 'hard':
        count = 30;
        break;
      default:
        count = 40;
        break;
    }

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, count);
  };

  // 使用递归函数填充数独盘
  const fillSudoku = (row: number, col: number): boolean => {
    // 遍历完了所有的行
    if (row === 9) {
      return true;
    }

    // 遍历完了当前行的所有列
    if (col === 9) {
      return fillSudoku(row + 1, 0);
    }

    // 如果当前位置已经有值，则继续下一列
    if (sudoku[row][col] !== 0) {
      return fillSudoku(row, col + 1);
    }

    // 尝试填入数字
    const numbers = shuffle([...Array(9).keys()], difficulty);
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i] + 1;
      if (isValid(row, col, num)) {
        sudoku[row][col] = num;
        if (fillSudoku(row, col + 1)) {
          return true;
        }
        sudoku[row][col] = 0;
      }
    }

    return false;
  };

  // 填充数独盘
  fillSudoku(0, 0);

  return sudoku;
};

const generateSudokuBoard = (
  difficulty: string,
  emptyCount: number,
): number[][] => {
  const sudoku = generateSudoku(difficulty);
  // 空格的计数
  let emptyCells = 0;

  while (emptyCells < emptyCount) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (sudoku[row][col] !== 0) {
      sudoku[row][col] = 0;
      emptyCells++;
    }
  }

  return sudoku;
};

const SudokuBoard: React.FC<{ difficulty: string }> = ({ difficulty }) => {
  const [arrSudo, setArrSudoku] = useState<any>([]);
  // 空出指定数量的格子
  const [emptyCount, setEmptyCount] = useState(35);

  const getData = () => {
    const arr = [];
    for (let index = 0; index < 6; index++) {
      const newSudoku = generateSudokuBoard(difficulty, emptyCount);
      arr.push(newSudoku);
    }
    setArrSudoku(arr);
  };

  /**
   * 刷新
   */
  const emitRefresh = () => {
    getData();
  };
  /**
   * 设置成功
   */
  const onSuccess = (values: any) => {
    console.log('%c' + 'onSuccess', 'background: green; color: #fff;');
    console.log(values.count);
    setEmptyCount(Number(values.count));
  };
  /**
   * 显示设置
   */
  const refDialog: any = useRef();
  const onShowDialog = () => {
    refDialog.current.showDialog();
  };

  useEffect(() => {
    getData();
  }, [emptyCount]);

  if (arrSudo.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <PageContent>
      <div className={styles.box}>
        <HeaderPage emitClick={onShowDialog} emitRefresh={emitRefresh} />
        {/* 设置 */}
        <DialogSetting ref={refDialog} onSuccess={onSuccess} />
        {arrSudo.map((sudo: any[], index: number) => (
          <div className={styles.itemBox} key={'00' + index}>
            <table className={styles.myTable}>
              <tbody>
                {sudo.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell: any, cellIndex: number) => (
                      <td className={styles.myTd} key={cellIndex}>
                        {!cell ? '' : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </PageContent>
  );
};

export default SudokuBoard;
