import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { getRoutePathAuth, getRoutePathMain } from '@/shared/const/router';

export const routeConfig = createBrowserRouter([
    {
        path: getRoutePathMain(),
        element: <Suspense fallback="Loading...">
            <div>make</div>
        </Suspense>,
    },
    {
        path: getRoutePathAuth(),
        element: <Suspense fallback="Loading...">
            <div>make</div>
        </Suspense>,
    },
]);
