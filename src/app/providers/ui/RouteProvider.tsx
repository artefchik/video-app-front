import { RouterProvider } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

export const RouteProvider = () => <RouterProvider router={routeConfig} />;
