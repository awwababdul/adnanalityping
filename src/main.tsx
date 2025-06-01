
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx: Starting application...');

// Check if environment variables are available
console.log('Environment check:', {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ? 'Present' : 'Missing',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing'
});

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log('Main.tsx: Root element found, creating React root...');
  const root = createRoot(rootElement);
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Main.tsx: App rendered successfully');
  } catch (error) {
    console.error('Main.tsx: Error rendering app:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>Application Error</h1>
        <p>Failed to start the application. Please check the console for details.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `;
  }
} else {
  console.error('Main.tsx: Root element not found');
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Critical Error</h1>
      <p>Root element not found. The application cannot start.</p>
    </div>
  `;
}
