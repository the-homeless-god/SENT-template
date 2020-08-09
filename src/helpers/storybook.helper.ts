import type { SvelteComponentDev } from 'svelte/internal'

type ComponentStory<T> = {
  Component: typeof SvelteComponentDev
  props: T
}

export const wrapComponent = <T>(
  Component: typeof SvelteComponentDev,
  props: T,
): (() => ComponentStory<T>) => () => ({ Component, props })
