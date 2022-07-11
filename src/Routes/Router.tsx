import { BarbecuesList } from 'pages/BarbecuesList/BarbecuesList';
import { GuestsList } from 'pages/GuestsList/GuestsList';
import { Login } from 'pages/Login';
import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './Private';

export function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route
          path="/barbecue-list"
          element={<PrivateRoute component={<BarbecuesList />} />}
        />
        <Route
          path="/guests-list"
          element={<PrivateRoute component={<GuestsList />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
