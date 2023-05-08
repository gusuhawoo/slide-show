import Hexagon, { HexagonProps } from './Hexagon';

describe('<Hexagon />', () => {
  it('renders', () => {
    const props: HexagonProps = {
      title: 'テスト',
      subtitle: '中です',
    };
    cy.mount(<Hexagon {...props} />);
  });
});
