import type { SvelteComponentDev } from 'svelte/internal'
import { object } from '@storybook/addon-knobs'

export type ComponentStory<T> = {
  Component: typeof SvelteComponentDev
  props: T
}

export const wrapComponent = <T>(Component: typeof SvelteComponentDev, props: T): (() => ComponentStory<T>) => () => ({
  Component,
  props,
})

export const wrap = <T>(title: string, Component: typeof SvelteComponentDev, props: T): ComponentStory<T> => ({
  Component,
  props: {
    ...object(title, { ...props }),
  },
})
