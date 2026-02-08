import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: {
        type: "oscillator",
        waveform: "sine",
        frequency: 277,
        frequencyEnd: 117,
      },
      filter: { type: "lowpass", frequency: 254, Q: 0.1 },
      envelope: { attack: 0.001, decay: 0.06 },
      gain: 0.1,
    },
  ],
};

export function click(options?: PresetOptions) {
  playSound(config, options);
}
