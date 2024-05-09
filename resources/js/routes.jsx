import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";
import { SingUp } from "./pages/SingUp";
import { SingIn } from "./pages/SingIn";

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
    }
]);

export default router;
