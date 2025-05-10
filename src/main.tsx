
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root element and render the app
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(<App />);
