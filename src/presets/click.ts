import { playSound } from '../engine'
import type { SoundConfig, PresetOptions } from '../types'

const config: SoundConfig = {
  layers: [{
    source: { type: 'noise' },
    filter: { type: 'bandpass', frequency: 2000, Q: 1.5 },
    envelope: { attack: 0.001, decay: 0.05 },
    gain: 0.3,
  }],
}

export function click(options?: PresetOptions) {
  playSound(config, options)
}
