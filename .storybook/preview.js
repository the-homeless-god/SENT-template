import { addParameters } from '@storybook/client-api'

addParameters({
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text
      }

      return null
    },
  },
})
