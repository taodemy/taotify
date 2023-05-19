import getAudioBuffer from "../getAudioBuffer";

interface Props {
  mp3Url: string;
  audioContext: AudioContext;
  audioSource: AudioBufferSourceNode;
  gainNode: GainNode;
}
export default async function loadAudio({ mp3Url, audioContext, audioSource, gainNode }: Props) {
  const res = await getAudioBuffer(mp3Url);
  if (res.status && res.audioBuffer) {
    gainNode = audioContext.createGain();
    audioSource = audioContext.createBufferSource();
    audioContext.decodeAudioData(res.audioBuffer, (buffer) => {
      audioSource.buffer = buffer;
      audioSource.connect(gainNode);
      gainNode.connect(audioContext.destination);
    });
  }
}
