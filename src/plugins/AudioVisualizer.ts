const audioContext = new AudioContext();

type MusicVisualizerOptions = {
  audioEl?: ArrayBuffer;
  size?: number;
};

export class MusicVisualizer {
  private analyser: AnalyserNode;
  private gainNode: GainNode;
  private audioSource?: AudioBufferSourceNode;
  private options: MusicVisualizerOptions & {
    size: number;
  };
  private visualArr: Uint8Array;
  constructor(options?: MusicVisualizerOptions) {
    const defaultOptions = {
      size: 128,
    };
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.analyser = audioContext.createAnalyser();
    this.analyser.fftSize = this.options.size * 2;

    this.gainNode = audioContext.createGain();
    this.gainNode.connect(audioContext.destination);

    this.analyser.connect(this.gainNode);

    if (this.options.audioEl) {
      this.audioSource = audioContext.createBufferSource();
      audioContext.decodeAudioData(this.options.audioEl, (buffer) => {
        this.audioSource!.buffer = buffer;
      });
      this.audioSource.connect(this.analyser);
    }

    this.visualArr = new Uint8Array(this.analyser.frequencyBinCount);
    this.resumeAudioContext();
  }

  private resumeAudioContext() {
    if (audioContext) {
      const resumeAudio = () => {
        if (audioContext.state === "suspended") audioContext.resume();
        document.removeEventListener("click", resumeAudio);
      };
      document.addEventListener("click", resumeAudio);
    }
  }

  destroy() {
    this.analyser.disconnect(this.gainNode);
    this.audioSource?.disconnect(this.analyser);
    this.gainNode.disconnect(audioContext.destination);
  }

  setAudioEl(url: String) {
    if (this.audioSource) {
      this.audioSource.disconnect(this.analyser);
    }
    this.audioSource = audioContext.createBufferSource();
    this.audioSource.connect(this.analyser);
  }

  changeVolumn(value: number) {
    this.gainNode.gain.value = value;
  }

  getVisualizeValue() {
    this.analyser.getByteFrequencyData(this.visualArr);
    return this.visualArr;
  }
}
