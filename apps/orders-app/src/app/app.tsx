import styled from 'styled-components';
import OrdersPage from './pages/OrdersPage';

const StyledApp = styled.div`
  // Your style here
  padding: 20px;
`;

export function App() {
  return (
    <StyledApp>
      <OrdersPage />
    </StyledApp>
  );
}

export default App;
