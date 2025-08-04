import type { FunctionComponent } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
