import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './global.js';
import routes from './routes.jsx';
// Mantine Imports
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
    /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={routes} />
    </MantineProvider>
);
