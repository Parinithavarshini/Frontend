import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Apps from './Apps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)