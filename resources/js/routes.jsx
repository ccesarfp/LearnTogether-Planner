import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";
import { SingUp } from "./pages/SingUp";
import { SingIn } from "./pages/SingIn";
import { Tasks } from './pages/Tasks/index.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {}
        ]
    },
    {
        path: "/sing-up",
        element: <SingUp />
    },
    {
        path: "/sing-in",
        element: <SingIn />
    },
    {
        path: "/tasks",
        element: <Tasks />
    }
]);

export default router;
