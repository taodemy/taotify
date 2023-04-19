export default function formatTime(time: number) {
  const roundedMinutes = Math.floor(time / 60);
  const minutes = roundedMinutes % 60;
  const seconds = time % 60;

  const formatedHours =
    roundedMinutes / 60 >= 1 ? `${Math.floor(roundedMinutes / 60).toString()}:` : "";
  const formatedMinutes = formatedHours && minutes < 10 ? `0${minutes}` : minutes.toString();
  const formatedSeconds = seconds >= 10 ? seconds.toString() : `0${seconds}`;
  return `${formatedHours}${formatedMinutes}:${formatedSeconds}`;
}
