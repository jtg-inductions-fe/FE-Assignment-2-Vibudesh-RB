import { useState } from 'react';

import { HEADER_HEIGHT } from 'constant/themeConstant';
import Header from 'container/Header/Header';
import { Outlet } from 'react-router';

import { Box, Drawer, useMediaQuery } from '@mui/material';

import { theme } from '@theme';

import { LayoutProps } from './Layout.types';

const Layout = ({
    showHeader = false,
    showSidebar = false,
    children,
}: LayoutProps) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <Box>
            {showHeader &&
                (isMediumUp ? (
                    <Header />
                ) : (
                    <Header onMenuClick={toggleSidebar} showHamburger />
                ))}

            <Box display="flex" flex="1">
                {showSidebar && isMediumUp && <h1>Sidebar</h1>}

                {!isMediumUp && showSidebar && (
                    <Drawer
                        open={isSidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                        PaperProps={{
                            sx: {
                                top: `${HEADER_HEIGHT}px`,
                                height: `calc(100% - ${HEADER_HEIGHT}px)`,
                            },
                        }}
                    >
                        <Box p={2}>
                            <h1>Sidebar</h1>
                        </Box>
                    </Drawer>
                )}

                <Box component="main" flex="1" p={2}>
                    {children ?? <Outlet />}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
