let ctx: AudioContext | null = null

export function getContext(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext()
  }
  if (ctx.state === 'suspended') {
    ctx.resume()
  }
  return ctx
}

export function setContext(userCtx: AudioContext): void {
  ctx = userCtx
}
