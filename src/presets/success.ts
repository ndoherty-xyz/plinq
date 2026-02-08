import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "oscillator", waveform: "sine", frequency: 523 }, // C5
      envelope: { attack: 0.001, decay: 0.25 },
      gain: 0.2,
    },
    {
      source: { type: "oscillator", waveform: "sine", frequency: 659 }, // E5
      envelope: { attack: 0.001, decay: 0.25 },
      gain: 0.2,
      delay: 0.05,
    },
    {
      source: { type: "oscillator", waveform: "sine", frequency: 784 }, // G5
      envelope: { attack: 0.001, decay: 0.3 },
      gain: 0.2,
      delay: 0.1,
    },
  ],
};

export function success(options?: PresetOptions): Promise<void> {
  return playSound(config, options);
}
