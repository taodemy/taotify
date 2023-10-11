interface Props {
  mp3Url: string;
  audioContext: AudioContext | null;
}
async function getArrayBuffer(mp3Url: string) {
  try {
    const res = await fetch(mp3Url);
    if (!res.ok) {
      throw new Error("Failed to fetch audio data");
    }
    const arrayBuffer = await res.arrayBuffer();

    return { arrayBuffer: arrayBuffer, status: true };
  } catch (error) {
    return { arrayBuffer: null, status: false };
  }
}

/* istanbul ignore next */ async function getAudioBuffer({ mp3Url, audioContext }: Props) {
  if (!mp3Url) return { audioSource: null, status: false };
  const res = await getArrayBuffer(mp3Url);
  if (res.status && res.arrayBuffer && audioContext) {
    const audioBuffer = await audioContext.decodeAudioData(res.arrayBuffer);
    return { audioBuffer: audioBuffer, status: true };
  } else {
    return { audioBuffer: null, status: false };
  }
}

export { getAudioBuffer, getArrayBuffer };
