import SlideShow from './index';

describe('<SlideShow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SlideShow />);
  });
});
