import { playSound } from '../engine'
import type { SoundConfig, PresetOptions } from '../types'

const config: SoundConfig = {
  layers: [{
    source: { type: 'oscillator', waveform: 'sine', frequency: 520, frequencyEnd: 340 },
    envelope: { attack: 0.001, decay: 0.08 },
    gain: 0.35,
  }],
}

export function pop(options?: PresetOptions) {
  playSound(config, options)
}
