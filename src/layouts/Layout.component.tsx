import { Outlet } from 'react-router';

import { LayoutProps } from './Layout.types';

const Layout = ({
    showHeader = false,
    showSidebar = false,
    children,
}: LayoutProps) => (
    <div>
        {showHeader && <header>Header</header>}
        {showSidebar && <h2>Sidebar</h2>}
        <main>{children ?? <Outlet />}</main>
    </div>
);

export default Layout;
