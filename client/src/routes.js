import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/constantsRoutes";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: Admin,
    // errorElement: ErrorPage,
  },
  {
    path: BASKET_ROUTE,
    Element: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Element: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Element: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: Auth,
  },
  {
    path: `${DEVICE_ROUTE}/:id`,
    Element: DevicePage,
  },
];
