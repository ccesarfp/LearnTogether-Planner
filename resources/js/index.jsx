import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './global.js';
import routes from './routes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyle />
        <RouterProvider router={routes} />
    </>
);
