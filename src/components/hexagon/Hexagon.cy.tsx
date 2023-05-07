import React from 'react'
import Hexagon from './Hexagon'

describe('<Hexagon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Hexagon />)
  })
})