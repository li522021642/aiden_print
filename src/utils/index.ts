export const getRandom = (number: number = 10): number => {
  return Math.ceil(Math.random() * number);
};

export const getRndInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
