// Utility to convert an object with types to an array
export const typesRefactor = (arr: any) => {
  const test = arr?.map((item: any) => {
    return Object.values(item);
  });

  return test?.flat(1);
};
