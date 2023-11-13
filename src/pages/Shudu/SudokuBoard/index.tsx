/**
 * 数独面板组件
 * @param props
 * @returns
 */
function SudokuBoard(props: any) {
  const { board, onChange } = props;

  const handleCellChange = (e: any, row: any, col: any) => {
    const value = parseInt(e.target.value) || 0;
    onChange(row, col, value);
  };

  return (
    <table className="sudoku-board">
      <tbody>
        {board.map((row: any, rowIndex: number) => (
          <tr key={rowIndex}>
            {row.map((cell: any, colIndex: number) => (
              <td key={colIndex}>
                <input
                  type="number"
                  min="1"
                  max="9"
                  value={cell || ''}
                  onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SudokuBoard;
