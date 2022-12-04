import DashBoardLayout from "../../Layout/DashBoardLayout";
import AllServices from "../../Pages/AllServices/AllServices";
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
      {
        path:`/allservices`,
        element: <AllServices></AllServices>
      }
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
        path: `/dashboard/:id`,
        element: <CustomerBooking></CustomerBooking>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
    ],
  },
]);

export default router;
