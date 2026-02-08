let ctx: AudioContext | null = null;

export async function getContext(): Promise<AudioContext> {
  // Discard a context that was closed (by us or the browser)
  if (ctx && ctx.state === "closed") {
    ctx = null;
  }

  if (!ctx) {
    ctx = new AudioContext();
  }

  // Resume if not running (covers 'suspended' and 'interrupted' states)
  if (ctx.state !== "running") {
    await ctx.resume();

    // If resume silently failed, scrap the context and create a fresh one.
    // Re-read .state off the instance since TS narrows it inside this block.
    if ((ctx as AudioContext).state !== "running") {
      ctx.close().catch(() => {});
      ctx = new AudioContext();
      await ctx.resume();
    }
  }

  return ctx;
}

export function setContext(userCtx: AudioContext): void {
  ctx = userCtx;
}

// Proactively resume the context when the page becomes visible again so
// the first sound after a tab-switch doesn't pay the resume latency.
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (
      document.visibilityState === "visible" &&
      ctx &&
      ctx.state !== "running"
    ) {
      ctx.resume().catch(() => {
        ctx?.close().catch(() => {});
        ctx = null;
      });
    }
  });
}
