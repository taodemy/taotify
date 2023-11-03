export default function sliceArray<T>(arrayBeforeSlice: T[], start: number, end?: number): T[] {
  return end ? arrayBeforeSlice.slice(start, end) : arrayBeforeSlice.slice(start);
}
