import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import GlobalStyle from './global.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Home />
    </BrowserRouter>
);
