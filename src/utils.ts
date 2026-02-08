const noiseCache = new Map<number, AudioBuffer>();

export function createNoiseBuffer(
  ctx: AudioContext,
  duration: number,
): AudioBuffer {
  const key = Math.round(duration * 10) / 10;

  const cached = noiseCache.get(key);
  if (cached) return cached;

  const sampleRate = ctx.sampleRate;
  const length = Math.max(1, Math.floor(sampleRate * key));
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  noiseCache.set(key, buffer);
  return buffer;
}
