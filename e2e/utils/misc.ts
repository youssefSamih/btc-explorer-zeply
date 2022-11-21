const memo =
  (fn: (...values: string[]) => string, ...cargs: string[]) =>
  (...args: string[]) =>
    fn(...cargs, ...args);

const firstToUpper = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const sel = (id: string) => `[data-test="${id}"]`;

export const multiSel = (...args: string[]) =>
  args.reduce((acc, cur) => `${acc} ${cur}`.trim(), '');

export const memoMultiSel = (...args: string[]) => memo(multiSel, ...args);

export const memoMultiSelOfObjKeys = (obj: { [key: string]: string }) =>
  Object.keys(obj).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: obj[cur],
      [`in${firstToUpper(cur)}`]: memoMultiSel(obj[cur])
    }),
    {}
  );
