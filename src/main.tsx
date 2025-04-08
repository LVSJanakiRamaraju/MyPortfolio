import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import TechSphereBackground from "./components/TechSphereBackground.tsx";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="relative min-h-screen overflow-hidden">
      <TechSphereBackground/>
      <App />
    </div>
  </StrictMode>
);
