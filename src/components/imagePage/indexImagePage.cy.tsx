import React from 'react'
import ImagePage from './index'

describe('<ImagePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImagePage />)
  })
})