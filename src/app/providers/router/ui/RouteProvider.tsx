import { RouterProvider } from 'react-router-dom';
import { routeConfig } from '@/app/providers/router/config/routeConfig';


export const RouteProvider = () => <RouterProvider router={routeConfig} />
