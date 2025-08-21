import React, { useEffect, useState } from 'react';

import AutoComplete from 'components/AutoComplete/AutoComplete.component';
import IconButtonComponent from 'components/IconButton/IconButton.components';
import ProfilePopover from 'components/ProfilePopOver/ProfilePopOver.components';
import { products } from 'mockData/Product/Product.data';
import { users } from 'mockData/User/User.data';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Images } from '@constant';

import { HeaderBox, StyledHeader } from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ showHamburger, onMenuClick }: HeaderProps) => {
    const navigate = useNavigate();
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const productTitles = products.map((item) => item.title);
        setOptions(productTitles);
    }, []);

    const handleChange = (
        _: React.ChangeEvent<unknown>,
        value: string | null,
    ) => {
        if (typeof value === 'string' && value.trim() !== '') {
            const slug = encodeURIComponent(value.trim().toLowerCase());
            void navigate(`/product/${slug}`);
        }
    };

    return (
        <StyledHeader>
            {!showHamburger ? (
                <HeaderBox gap={8}>
                    <Link to="/" style={{ fontSize: 0 }}>
                        <img src={Images.HeaderLogo} alt="Logo" />
                    </Link>
                    <AutoComplete options={options} onChange={handleChange} />
                </HeaderBox>
            ) : (
                <IconButtonComponent icon={MenuIcon} onClick={onMenuClick} />
            )}
            <HeaderBox gap={3}>
                <IconButtonComponent icon={NotificationsIcon} rounded />
                <ProfilePopover
                    name={users.name}
                    email={users.email}
                    imageUrl={users.imageUrl}
                />
            </HeaderBox>
        </StyledHeader>
    );
};

export default Header;
