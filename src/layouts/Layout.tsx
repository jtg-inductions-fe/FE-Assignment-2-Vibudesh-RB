import { Outlet } from 'react-router';

const Layout = () => (
    <div>
        <header>Header</header>
        <main>
            <Outlet />
        </main>
    </div>
);

export default Layout;
