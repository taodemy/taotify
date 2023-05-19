export default async function getAudioBuffer(mp3Url: string) {
  try {
    const res = await fetch(mp3Url);
    if (!res.ok) {
      throw new Error("Failed to fetch audio data");
    }
    const arrayBuffer = await res.arrayBuffer();

    return { audioBuffer: arrayBuffer, status: true };
  } catch (error) {
    return { audioBuffer: null, status: false };
  }
}
