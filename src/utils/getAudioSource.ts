interface Props {
  mp3Url: string;
  audioContext: AudioContext | null;
}
async function getAudioBuffer(mp3Url: string) {
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

/* istanbul ignore next */ async function getAudioSource({ mp3Url, audioContext }: Props) {
  if (!mp3Url) return;
  const res = await getAudioBuffer(mp3Url);
  if (res.status && res.audioBuffer && audioContext) {
    const audioSource = audioContext.createBufferSource();
    audioContext.decodeAudioData(res.audioBuffer, (buffer) => {
      audioSource.buffer = buffer;
    });
    return { audioSource: audioSource, status: true };
  } else {
    return { audioSource: null, status: false };
  }
}

export { getAudioSource, getAudioBuffer };
