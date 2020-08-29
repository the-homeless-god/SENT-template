import { addParameters } from '@storybook/client-api'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text
      }

      return null
    },
  },

  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
})
