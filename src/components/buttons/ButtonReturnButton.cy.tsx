import { ReturnButton } from './Button';

describe('<ReturnButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReturnButton onClick={() => {}} />);
  });
});
