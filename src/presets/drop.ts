import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: {
        type: "oscillator",
        waveform: "sine",
        frequency: 600,
        frequencyEnd: 200,
      },
      envelope: { attack: 0.001, decay: 0.2 },
      gain: 0.3,
    },
  ],
};

export function drop(options?: PresetOptions): void {
  playSound(config, options);
}
