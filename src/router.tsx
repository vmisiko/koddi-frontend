
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StolenBikesList from "./StolenBIkesList";
import StolenBikeDetail from "./StolenBikeDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App children/>,
        children: [
            {
                path: '',
                element: <StolenBikesList />,
            },
            {
                path: ':id',
                element: <StolenBikeDetail />,
            }
        ],
    },
]);

export default router;
