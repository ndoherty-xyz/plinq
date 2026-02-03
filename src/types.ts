export type WaveformType = 'sine' | 'triangle' | 'square' | 'sawtooth'

export type OscillatorSource = {
  type: 'oscillator'
  waveform: WaveformType
  frequency: number
  /** optional frequency ramp target — for sounds that pitch up/down */
  frequencyEnd?: number
}

export type NoiseSource = {
  type: 'noise'
}

export type Source = OscillatorSource | NoiseSource

export type FilterConfig = {
  type: BiquadFilterType
  frequency: number
  Q?: number
}

export type EnvelopeConfig = {
  attack: number
  decay: number
  /** default 'exponential', linear sounds robotic */
  curve?: 'exponential' | 'linear'
}

export type LayerConfig = {
  source: Source
  filter?: FilterConfig
  envelope: EnvelopeConfig
  gain: number
  /** delay before this layer starts, in seconds */
  delay?: number
}

export type SoundConfig = {
  layers: LayerConfig[]
}

export type PresetOptions = {
  /** 0 to 1, default 1 */
  volume?: number
  /** shift pitch: 'low' | 'mid' | 'high' or a multiplier number */
  pitch?: 'low' | 'mid' | 'high' | number
}
