import { storiesOf } from '@storybook/svelte'

import Note from '../../classes/note'
import { wrapComponent } from '../../helpers/storybook.helper'
import type { ImageProps } from './Image.utils'

import Image from './Image.svelte'

const defaultState: ImageProps = {
  alt: 'logo',
  height: '100%',
  src: 'https://github.com/Zimtir/SENT-template/blob/master/public/assets/img/logo.png?raw=true',
  width: '100%',
}

storiesOf('Image', module)
  .add('Default', wrapComponent<ImageProps>(Image, defaultState), {
    notes: new Note('Image', 'Simple wrapper for all images', [
      'You need control of all your images at one place',
      'You want make a global images with default styling',
    ]).getMarkdownNote(),
  })
  .add(
    'With caption',
    wrapComponent<ImageProps>(Image, {
      ...defaultState,
      caption: 'Some caption',
    }),
    {
      notes: new Note('Image', 'Simple wrapper for all images', [
        'You want to see a caption under your image',
      ]).getMarkdownNote(),
    },
  )
