export const PromiseWithResolvers = () => {
  let resolve: (value: unknown) => void = () => void 0;
  let reject: (reason?: any) => void = () => void 0;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};
