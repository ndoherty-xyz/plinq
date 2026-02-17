import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "oscillator", waveform: "triangle", frequency: 461 },
      envelope: { attack: 0.004, decay: 0.21 },
      gain: 0.17,
    },
  ],
};

export function warning(options?: PresetOptions): void {
  playSound(config, options);
}
