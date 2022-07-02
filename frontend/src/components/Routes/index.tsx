import { BarbecueList } from 'pages/BarbecueList';
import { Login } from 'pages/Login';
import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

export function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/*">
        <Route path="login" element={<Login />} />
        <Route path="barbecue-list" element={<BarbecueList />} />
      </Route>
    </Routes>
  );
}
