import { playSound } from "../engine";
import type { SoundConfig, PresetOptions } from "../types";

const config: SoundConfig = {
  layers: [
    {
      source: { type: "noise" },
      filter: { type: "lowpass", frequency: 460, Q: 13.7 },
      envelope: { attack: 0.059, decay: 0.22 },
      gain: 0.09,
    },
  ],
};

export function woosh(options?: PresetOptions) {
  playSound(config, options);
}
