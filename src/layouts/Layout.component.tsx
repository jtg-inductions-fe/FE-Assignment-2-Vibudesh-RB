import { Outlet } from 'react-router';

import { Box } from '@mui/material';

import { LayoutProps } from './Layout.types';

const Layout = ({
    showHeader = false,
    showSidebar = false,
    children,
}: LayoutProps) => (
    <Box>
        {showHeader && <header>Header</header>}
        {showSidebar && <h2>Sidebar</h2>}
        <main>{children ?? <Outlet />}</main>
    </Box>
);

export default Layout;
