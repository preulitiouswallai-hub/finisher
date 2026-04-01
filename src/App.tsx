/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cottages from './pages/Cottages';
import Experiences from './pages/Experiences';
import Sustainability from './pages/Sustainability';
import Booking from './pages/Booking';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cottages" element={<Cottages />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
