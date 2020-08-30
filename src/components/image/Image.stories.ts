import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { wrap, ComponentStory } from '../../helpers/storybook.helper'
import { ImageProps, initialStoryState } from './Image.utils'

import Image from './Image.svelte'

export const Default = (): ComponentStory<ImageProps> =>
  wrap<ImageProps>('image', Image, {
    ...initialStoryState,
    onCaptionClick: action('onCaptionClick'),
    onClick: action('onClick'),
  })

export const WithCaption = (): ComponentStory<ImageProps> =>
  wrap<ImageProps>('imageWithCaption', Image, {
    ...initialStoryState,
    caption: 'Some caption',
    onCaptionClick: action('onCaptionClick'),
    onClick: action('onClick'),
  })

export default {
  title: 'Image',
  decorators: [withKnobs],
}
