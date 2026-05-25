import { createBrowserRouter } from "react-router-dom";

import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Booking from "./screens/Booking";
import Categories from "./screens/Categories";
import CreatorList from "./screens/CreatorList";
import CreatorProfile from "./screens/CreatorProfile";
import CreatorSetup from "./screens/CreatorSetup";
import CustomerDashboard from "./screens/CustomerDashboard";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import PortfolioUpload from "./screens/PortfolioUpload";
import Register from "./screens/Register";
import Splash from "./screens/Splash";
import Chat from "./screens/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/creators/:category/:subcategory",
    element: <CreatorList />,
  },
  {
    path: "/creator/:id",
    element: <CreatorProfile />,
  },
  {
    path: "/chat/:creatorId",
    element: <Chat />,
  },
  {
    path: "/booking/:creatorId",
    element: <Booking />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/customer-dashboard",
    element: <CustomerDashboard />,
  },
  {
    path: "/creator-setup",
    element: <CreatorSetup />,
  },
  {
    path: "/portfolio-upload",
    element: <PortfolioUpload />,
  },
]);