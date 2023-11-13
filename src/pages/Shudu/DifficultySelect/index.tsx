/**
 * 难度选择组件
 * @param props
 * @returns
 */
function DifficultySelect(props: any) {
  const { onChange } = props;

  const handleDifficultyChange = (e: any) => {
    const difficulty = e.target.value;
    onChange(difficulty);
  };

  return (
    <div>
      <label>难度：</label>
      <select onChange={handleDifficultyChange}>
        <option value="easy">简单</option>
        <option value="medium">中等</option>
        <option value="hard">困难</option>
      </select>
    </div>
  );
}

export default DifficultySelect;
