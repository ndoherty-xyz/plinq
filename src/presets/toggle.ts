import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "oscillator", waveform: "sine", frequency: 440 },
      envelope: { attack: 0.001, decay: 0.06 },
      gain: 0.25,
    },
    {
      source: { type: "oscillator", waveform: "sine", frequency: 580 },
      envelope: { attack: 0.001, decay: 0.06 },
      gain: 0.25,
      delay: 0.06,
    },
  ],
};

export function toggle(options?: PresetOptions): Promise<void> {
  return playSound(config, options);
}
