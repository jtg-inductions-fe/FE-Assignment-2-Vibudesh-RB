import { createBrowserRouter, RouterProvider } from 'react-router';

import { Routes } from './Routes';

const router = createBrowserRouter(Routes);

export const BrowserRoutes: React.FC = () => <RouterProvider router={router} />;
