import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "oscillator", waveform: "triangle", frequency: 440 },
      envelope: { attack: 0.001, decay: 0.18 },
      gain: 0.3,
    },
  ],
};

export function warning(options?: PresetOptions): Promise<void> {
  return playSound(config, options);
}
