import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from '../../ui';
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../';

export const HeroesRoutes = () => (
  <>
    <Navbar />

    <div className="container-fluid py-3">
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />

        {/* Search, Hero by id */}

        <Route path="/" element={<Navigate to="marvel" />} />
      </Routes>
    </div>
  </>
);
