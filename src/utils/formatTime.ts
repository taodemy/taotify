export default function formatTime(time: number) {
  const roundedMinutes = Math.floor(time / 60);
  const minutes = roundedMinutes % 60;
  const seconds = time % 60;

  const formattedHours =
    roundedMinutes / 60 >= 1 ? `${Math.floor(roundedMinutes / 60).toString()}:` : "";
  const formattedMinutes = formattedHours
    ? minutes.toString().padStart(2, "0")
    : minutes.toString();
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
}
