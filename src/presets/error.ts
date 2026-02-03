import { playSound } from '../engine'
import type { SoundConfig, PresetOptions } from '../types'

const config: SoundConfig = {
  layers: [
    {
      source: { type: 'oscillator', waveform: 'square', frequency: 180 },
      envelope: { attack: 0.001, decay: 0.15 },
      gain: 0.2,
    },
    {
      source: { type: 'oscillator', waveform: 'square', frequency: 196 }, // dissonant interval
      envelope: { attack: 0.001, decay: 0.15 },
      gain: 0.2,
    },
  ],
}

export function error(options?: PresetOptions) {
  playSound(config, options)
}
