import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';

const StyledApp = styled.div`
  // Your style here
`;

const ListingMaintenancePage = React.lazy(
  // @ts-ignore
  () => import('listing_maintenance_app/ListingMaintenancePage')
);
// @ts-ignore
const OrdersPage = React.lazy(() => import('orders_app/OrdersPage'));

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/listing-maintenance"
            element={<ListingMaintenancePage />}
          />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
