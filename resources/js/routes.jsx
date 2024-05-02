import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";
import { SingUp } from "./pages/SingUp";

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
    }
]);

export default router;
