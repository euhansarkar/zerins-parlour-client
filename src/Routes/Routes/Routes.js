import LogIn from "../../Pages/LogIn/LogIn";
import SIgnUp from "../../Pages/SignUp/SIgnUp";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: `/`,
        element: <Main></Main>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            }, 
            {
                path: `/login`,
                element: <LogIn></LogIn>
            },
            {
                path:`/signup`,
                element: <SIgnUp></SIgnUp>,
            }
        ]
    }
])

export default router;