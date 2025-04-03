import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Customer } from "../pages/customer/Customer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/customer",
        element: <Customer/>
    }
])