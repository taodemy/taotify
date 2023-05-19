import getAudioBuffer from "../getAudioBuffer";

interface Props {
  mp3Url: string;
  audioContext: AudioContext | null;
}
export default async function loadAudio({ mp3Url, audioContext }: Props) {
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
