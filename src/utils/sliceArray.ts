export default function sliceArray<T>(
  arrayBeforeSlice: T[] | undefined,
  start: number,
  end?: number
): T[] {
  if (arrayBeforeSlice === undefined) {
    return [];
  }

  return end ? arrayBeforeSlice.slice(start, end) : arrayBeforeSlice.slice(start);
}
