import { RouteObject } from 'react-router';

import Layout from '@layouts/Layout';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <h1>Home</h1> },
            { path: '*', element: <h1>Not-found</h1> },
        ],
    },
];
