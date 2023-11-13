/**
 *
 * @param props 生成个数选择组件
 * @returns
 */
function GenerateCountSelect(props: any) {
  const { onChange } = props;

  const handleGenerateCountChange = (e: any) => {
    const generateCount = parseInt(e.target.value);
    onChange(generateCount);
  };

  return (
    <div>
      <label>生成个数：</label>
      <select onChange={handleGenerateCountChange}>
        <option value="30">30个</option>
        <option value="40">40个</option>
        <option value="50">50个</option>
      </select>
    </div>
  );
}

export default GenerateCountSelect;
