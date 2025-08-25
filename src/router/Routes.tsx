import { RouteObject } from 'react-router';

import { routes } from '@constant';
import { Layout } from '@layouts';
export const Routes: RouteObject[] = [
    {
        path: routes.Home,
        element: (
            <Layout showHeader showSidebar>
                <h1>Home</h1>
            </Layout>
        ),
        errorElement: <h1>Error loading page</h1>,
        children: [
            {
                index: true,
                element: <h1>Home</h1>,
            },
        ],
    },
    {
        path: routes.Not_Found,
        element: (
            <Layout showHeader>
                <h1>Not Found</h1>
            </Layout>
        ),
        errorElement: <h1>Error loading page</h1>,
        children: [
            {
                path: '*',
                element: <h1>Not Found</h1>,
            },
        ],
    },
    {
        path: '/messages',
        element: (
            <Layout showHeader showSidebar>
                <h1>Home</h1>
            </Layout>
        ),
        errorElement: <h1>Error loading page</h1>,
        children: [
            {
                index: true,
                element: <h1>Home</h1>,
            },
        ],
    },
];
