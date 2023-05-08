import Contents from './Contents';

describe('<Contents />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contents />);
  });
});
