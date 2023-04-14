// Utility to convert an object with types to an array
export const typesRefactor = (arr: any) => {
  return arr?.map((item: any) => {
    return Object.values(item);
  });
};
