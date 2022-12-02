import DashBoardLayout from "../../Layout/DashBoardLayout";
import CustomerBooking from "../../Pages/DashBoard/CustomerBooking/CustomerBooking";
import LogIn from "../../Pages/LogIn/LogIn";
import SIgnUp from "../../Pages/SignUp/SIgnUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
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
        element: <Home></Home>,
      },
      {
        path: `/login`,
        element: <LogIn></LogIn>,
      },
      {
        path: `/signup`,
        element: <SIgnUp></SIgnUp>,
      },
    ],
  },
  {
    path: `/dashboard`,
    element: (
      <PrivateRoutes>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: `/dashboard`,
        element: <CustomerBooking></CustomerBooking>,
      },
    ],
  },
]);

export default router;
