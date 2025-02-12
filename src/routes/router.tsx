///routes.tsx
import "../index.css";
import Root from "../layouts/Root.tsx";
import { createBrowserRouter } from "react-router-dom";


import Dashboard from "../pages/Dashboard.tsx";
// import MonthlyDisplay from "../components/MonthlyDisplay.tsx";

// import Home from "../pages/Home.tsx";
// import ProtectedRoutes from "./ProtecetdRoutes.tsx";
// import About from "../pages/About.tsx";
// import Profile from "../pages/Profile.tsx";
// import Login from "../pages/Login.tsx";
// import Register from "../pages/Register.tsx";
// import CRM from "../pages/CRM.tsx";
// import UserEdit from "../pages/UserEdit.tsx";
// import Terms from "../pages/Terms.tsx";
// import Privacy from "../pages/Privacy.tsx";
// import Support from "../pages/Support.tsx";
// import FAQ from "../pages/FAQ.tsx";
// import Settings from "../pages/Settings.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: "/",
        children: [
            { index: true, element: <Dashboard /> },
        ],
    },
]);

export default router