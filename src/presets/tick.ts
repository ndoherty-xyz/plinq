import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "noise" },
      filter: { type: "highpass", frequency: 4000, Q: 0.5 },
      envelope: { attack: 0.001, decay: 0.03 },
      gain: 0.15,
    },
  ],
};

export function tick(options?: PresetOptions): void {
  playSound(config, options);
}
