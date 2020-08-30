import { isNoEmptyAlt, initialState } from './Image.utils'

describe('units', () => {
  describe('isNoEmptyAlt', () => {
    it('isNoEmptyAlt returns true for a not empty alt', () => {
      // Arrange
      const expected = true

      // Actual
      const actual = isNoEmptyAlt('alt')

      // Assert
      expect(actual).equal(expected)
    })

    it('isNoEmptyAlt returns false for a empty alt', () => {
      // Arrange
      const expected = false

      // Actual
      const actual = isNoEmptyAlt('')

      // Assert
      expect(actual).equal(expected)
    })

    it('isNoEmptyAlt returns false for a null alt', () => {
      // Arrange
      const expected = false

      // Actual
      const actual = isNoEmptyAlt(null)

      // Assert
      expect(actual).equal(expected)
    })

    it('isNoEmptyAlt returns false for a undefined alt', () => {
      // Arrange
      const expected = false

      // Actual
      const actual = isNoEmptyAlt(null)

      // Assert
      expect(actual).equal(expected)
    })
  })
})

describe('integrations', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct alt for <img>', () => {
    cy.get('img').invoke('attr', 'alt').should('eq', initialState.alt)
  })

  it('has the correct width for <img>', () => {
    cy.get('img').invoke('attr', 'width').should('eq', initialState.width)
  })

  it('has the correct src for <img>', () => {
    cy.get('img').invoke('attr', 'src').should('eq', initialState.src)
  })
})
