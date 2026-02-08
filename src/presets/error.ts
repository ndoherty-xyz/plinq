import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: {
        type: "oscillator",
        waveform: "sine",
        frequency: 499,
        frequencyEnd: 302,
      },
      envelope: { attack: 0.001, decay: 0.08 },
      gain: 0.11,
    },
    {
      source: {
        type: "oscillator",
        waveform: "sine",
        frequency: 316,
        frequencyEnd: 84,
      },
      envelope: { attack: 0.001, decay: 0.1 },
      gain: 0.09,
      delay: 0.11,
    },
  ],
};

export function error(options?: PresetOptions) {
  playSound(config, options);
}
