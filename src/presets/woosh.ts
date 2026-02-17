import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "noise" },
      envelope: { attack: 0.094, decay: 0.28 },
      gain: 0.12,
      filter: { type: "lowpass", frequency: 796, Q: 9.5 },
    },
  ],
};

export function woosh(options?: PresetOptions) {
  playSound(config, options);
}
