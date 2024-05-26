import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { getRoutePathAuth, getRoutePathMain } from '@/shared/const/router';
import { App } from '@/app/App';

export const routeConfig = createBrowserRouter([
    {
        path:getRoutePathMain(),
        element: <App />,
    },
    {
        path: getRoutePathAuth(),
        element: <Suspense fallback="Loading...">
            <div>make</div>
        </Suspense>,
    },
]);
