import { RouteObject } from 'react-router';

import Layout from '@layouts/Layout';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <Layout showHeader={true} showSidebar={true}>
                <h1>Home</h1>
            </Layout>
        ),
        errorElement: <h1>Error loading page</h1>,
    },
    {
        path: '*',
        element: (
            <Layout showHeader={true}>
                <h1>Not Found</h1>
            </Layout>
        ),
        errorElement: <h1>Error loading page</h1>,
    },
];
