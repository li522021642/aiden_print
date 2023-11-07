/**
 * 获取区间随机数
 * @param min 最小数
 * @param max 最大数
 * @returns
 */
export const getIntervalRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
