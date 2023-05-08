import ImagePage from './index';

describe('<ImagePage />', () => {
  it('renders without crashing', () => {
    cy.mount(<ImagePage />);
    cy.get('img').should('exist');
  });
});
