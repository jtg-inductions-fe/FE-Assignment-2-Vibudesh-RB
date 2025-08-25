import { useState } from 'react';

import { HEADER_HEIGHT } from 'constant/themeConstant';
import Header from 'container/Header/Header';
import Sidebar from 'container/Sidebar/Sidebar';
import sidebarData from 'mockData/Sidebar/Sidebar';
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
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <Box height="100vh" display="flex" flexDirection="column">
            {showHeader &&
                (isMobile ? (
                    <header>
                        <Header />
                    </header>
                ) : (
                    <header>
                        <Header onMenuClick={toggleSidebar} showHamburger />
                    </header>
                ))}

            <Box display="flex" flex="1" overflow="hidden">
                {showSidebar && isMobile && (
                    <Box
                        component="aside"
                        sx={{
                            height: `calc(100vh - ${showHeader ? HEADER_HEIGHT : 0}px)`,
                        }}
                    >
                        <Sidebar items={sidebarData} />
                    </Box>
                )}

                {!isMobile && showSidebar && (
                    <Drawer
                        component="aside"
                        open={isSidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                        PaperProps={{
                            sx: {
                                top: `${HEADER_HEIGHT}px`,
                                height: `calc(100% - ${HEADER_HEIGHT}px)`,
                            },
                        }}
                    >
                        <Sidebar items={sidebarData} />
                    </Drawer>
                )}

                <Box component="main" flex="1" p={2} overflow="auto">
                    {children ?? <Outlet />}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
