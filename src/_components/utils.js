export const compose = (...fns) => (...args) => {
  return fns.slice(0, -1).reduceRight((res, fn) => fn(res),
    fns[fns.length -1].apply(null,args)
  );
};