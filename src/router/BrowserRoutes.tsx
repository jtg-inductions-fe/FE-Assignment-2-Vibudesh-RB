import { createBrowserRouter, RouterProvider } from 'react-router';

import { routes } from './routes';

const router = createBrowserRouter(routes);

export const BrowserRoutes: React.FC = () => <RouterProvider router={router} />;
