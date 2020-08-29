import { withKnobs } from '@storybook/addon-knobs'

import { wrap, ComponentStory } from '../../helpers/storybook.helper'
import type { ImageProps } from './Image.utils'

import Image from './Image.svelte'

const defaultState: ImageProps = {
  alt: 'logo',
  height: '100%',
  src: 'https://github.com/Zimtir/SENT-template/blob/master/public/assets/img/logo.png?raw=true',
  width: '100%',
}
export const Default = (): ComponentStory<ImageProps> => wrap<ImageProps>('image', Image, defaultState)

const captionState: ImageProps = {
  ...defaultState,
  caption: 'Some caption',
}
export const WithCaption = (): ComponentStory<ImageProps> => wrap<ImageProps>('imageWithCaption', Image, captionState)

export default {
  title: 'Image',
  decorators: [withKnobs],
}
