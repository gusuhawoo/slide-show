import React from 'react';
import { NextButton } from './Button';

describe('<NextButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NextButton onClick={() => {}} />);
  });
});
