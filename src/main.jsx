import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/normalize.css';
import './styles/colors.css';
const container = document.getElementById('root');

createRoot(container).render(<App />);
