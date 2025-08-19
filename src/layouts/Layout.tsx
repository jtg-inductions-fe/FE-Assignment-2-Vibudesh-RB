import { ReactNode } from 'react';

import { Outlet } from 'react-router';

interface LayoutProps {
    showHeader?: boolean;
    showSidebar?: boolean;
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    showHeader = false,
    showSidebar = false,
}: LayoutProps) => (
    <div>
        {showHeader && <header>Header</header>}
        {showSidebar && <h2>Sidebar</h2>}
        <main>
            <Outlet />
        </main>
    </div>
);

export default Layout;
