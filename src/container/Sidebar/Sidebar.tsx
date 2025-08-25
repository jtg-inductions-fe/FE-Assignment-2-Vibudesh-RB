import AccordionComponent from 'components/Accordion/Accordion.component';
import IconButtonComponent from 'components/IconButton/IconButton.components';
import LinkComponent from 'components/Link/Link.component';
import { useNavigate } from 'react-router';

import { Public } from '@mui/icons-material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';

import { StyledBox } from './Sidebar.styles';
import { SidebarChild, SidebarItem, SidebarProps } from './Sidebar.types';

const getSidebarChildrenProps = (children: SidebarChild[] = []) =>
    children.map((child) => ({
        label: child.label,
        to: child.to,
    }));

const Sidebar = ({ items }: SidebarProps) => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    const renderItem = (item: SidebarItem, index: number) => {
        const Icon = item.icon;

        return (
            <Box key={index}>
                {item.children && item.children.length > 0 ? (
                    <AccordionComponent label={item.label} icon={Icon}>
                        {getSidebarChildrenProps(item.children)}
                    </AccordionComponent>
                ) : (
                    <LinkComponent
                        to={item.to!}
                        icon={Icon}
                        label={item.label}
                        {...(typeof item.notificationCount === 'number' &&
                        item.notificationCount > 0
                            ? { notificationCount: item.notificationCount }
                            : {})}
                    />
                )}
            </Box>
        );
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            height="100%"
        >
            <Box overflow={'auto'}>
                {items.map((group, groupIndex) => {
                    const isLastGroup = groupIndex === items.length - 1;
                    const groupItems = Array.isArray(group) ? group : [group];

                    return (
                        <Box key={groupIndex}>
                            <StyledBox>
                                {groupItems.map((item, index) =>
                                    renderItem(item, index),
                                )}
                            </StyledBox>

                            {!isLastGroup && <Divider sx={{ my: 1 }} />}
                        </Box>
                    );
                })}
            </Box>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="22px"
                p={3}
            >
                <IconButtonComponent
                    icon={TuneIcon}
                    onClick={() => navigate('/messages')}
                    active={currentPath === '/messages'}
                />

                <IconButtonComponent
                    icon={Public}
                    onClick={() => navigate('/settings')}
                    active={currentPath === '/settings'}
                />

                <IconButtonComponent
                    icon={SettingsOutlinedIcon}
                    onClick={() => navigate('/home')}
                    active={currentPath === '/home'}
                />
            </Box>
        </Box>
    );
};

export default Sidebar;
