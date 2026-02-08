import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: {
        type: "oscillator",
        waveform: "sine",
        frequency: 557,
        frequencyEnd: 398,
      },
      filter: { type: "lowpass", frequency: 347, Q: 0.1 },
      envelope: { attack: 0.001, decay: 0.19 },
      gain: 0.11,
    },
  ],
};

export function pop(options?: PresetOptions) {
  playSound(config, options);
}
