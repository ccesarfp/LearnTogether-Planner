import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './global.js';
import routes from './routes.jsx';
// Mantine Imports
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { createTheme, MantineProvider, useMantineTheme } from '@mantine/core';

const themeCustom = createTheme({
    primaryColor: 'red',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider theme={themeCustom}>
        <GlobalStyle />
        <RouterProvider router={routes} />
    </MantineProvider>
);
