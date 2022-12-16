export const arraySum = (array) => {
  if (!array) return 0;

  let sum = 0;

  for (let i = 0; i < array.length; i++) sum += array[i];

  return sum;
};
