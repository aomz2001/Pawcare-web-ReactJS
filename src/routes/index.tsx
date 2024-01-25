import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home/Home";
import LandingPage from "../layouts/user/LandingPage";
import Condition from "../Pages/User/Page/Condition";
import MyAccount from "../Pages/User/Page/MyAccount";
import Signin from "../Pages/User/Login/Signin";
import Signup from "../Pages/User/Login/Signup";
import HomePageProvider from "../layouts/provider/HomePageProvider";
import HomeProvider from "../Pages/Provider/HomeProvider/HomeProvider";
import SigninProvider from "../Pages/Provider/LoginProvider/SigninProvider";
import { SignupProvider } from "../Pages/Provider/LoginProvider/SignupProvider";
import { AdminPage } from "../layouts/admin/AdminPage";
import { HomeAdmin } from "../Pages/admin/HomeAdmin/HomeAdmin";
import { SysInfo } from "../Pages/admin/SystemInformation/SysInfo";
import { Search } from "../Pages/User/Search/Search";
import { ProviderProfile } from "../Pages/User/Search/ProviderProfile";
import { Notifications } from "../Pages/User/Page/Notifications";
import { Payment } from "../Pages/User/Page/Payment";
import { Review } from "../Pages/User/Page/ReviewProvider/Review";
import { ProviderAccount } from "../Pages/Provider/ProviderAccount/ProviderAccount";
import { WorkforPet } from "../Pages/Provider/Work/WorkforPet";
import { Contact } from "../Pages/Provider/ContactAdmin/Contact";
import { AdminWork } from "../Pages/admin/AdminWork/AdminWork";
import { ContactPawcare } from "../Pages/User/Page/ContactPawcare";
import PrivateRoute from "./PrivateRoute";
import PrivateProviderRoute from "./PrivateProviderRoute";

const router = createBrowserRouter([
  //===============================================path user
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/condition',
        element: <Condition />,
      },
      {
        path: '/my-account',
        element: <PrivateRoute ><MyAccount /></PrivateRoute>,
      },
      {
        path: '/search-service',
        element: <PrivateRoute ><Search /></PrivateRoute>,
      },
      {
        path: '/provider-profile',
        element: <PrivateRoute ><ProviderProfile /></PrivateRoute>,
      },
      {
        path: '/notifications',
        element: <PrivateRoute ><Notifications /></PrivateRoute>,
      },
      {
        path: '/payment',
        element: <PrivateRoute ><Payment /></PrivateRoute>,
      },
      {
        path: '/review-provider',
        element: <PrivateRoute ><Review /></PrivateRoute>,
      },
      {
        path: '/contact-pawcare',
        element: <ContactPawcare />,
      },
    ],
  },
  {
    path: '/login',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  //===============================================path provider
  {
    path: '/provider',
    element: <PrivateProviderRoute><HomePageProvider /></PrivateProviderRoute>,
    children: [
      {
        index: true,
        element: <PrivateProviderRoute><HomeProvider /></PrivateProviderRoute>
      },
      {
        path: '/provider/account-provider',
        element: <PrivateProviderRoute><ProviderAccount /></PrivateProviderRoute>
      },
      {
        path: '/provider/your-work',
        element: <PrivateProviderRoute><WorkforPet /></PrivateProviderRoute>
      },
      {
        path: '/provider/request-to-admin',
        element: <PrivateProviderRoute><Contact /></PrivateProviderRoute>
      },
    ],
  },
  {
    path: '/provider/signup-provider',
    element: <SignupProvider />,
  },
  {
    path: '/provider/login-provider',
    element: <SigninProvider />
  },
  //===============================================path admin
  {
    path: '/for-admin-only',
    element: <PrivateProviderRoute><AdminPage /></PrivateProviderRoute>,
    children: [
      {
        index: true,
        element: <PrivateProviderRoute><HomeAdmin /></PrivateProviderRoute>,
      },
      {
        path: 'system-information',
        element: <PrivateProviderRoute><SysInfo /></PrivateProviderRoute>,
      },
      {
        path: 'work-admin',
        element: <PrivateProviderRoute><AdminWork /></PrivateProviderRoute>,
      },
    ]
  },
])
export default router;