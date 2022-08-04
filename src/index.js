import React from 'react';
import { MixtapeApp } from './MixtapeApp.js'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MixtapeApp />
  </StrictMode>,
);

