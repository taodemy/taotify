export type DebounceFunction<T extends any[], R> = (...args: T) => R;

export default function debounce<T extends any[], R>(
  func: DebounceFunction<T, Promise<R>>,
  delay: number
): DebounceFunction<T, Promise<R>> {
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args: T): Promise<R> {
    clearTimeout(timerId);

    return new Promise(async (resolve) => {
      timerId = setTimeout(async () => {
        const result: R = await func(...args);
        resolve(result);
      }, delay);
    });
  };
}
