import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <HeroesApp />
    </HashRouter>
  </StrictMode>
);
