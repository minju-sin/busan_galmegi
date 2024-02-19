// ../ui/Profile.js

import React from 'react';

import profileImage from '../images/profile.svg';
import { StyledLogo, StyledProfile } from './MainHeader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Profile() {

    // 프로필 열고 닫는 상태변수
    const [anchorEl, setAnchorEl] = React.useState(null);

    // 프로필 열기 함수
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // 프로필 닫기 함수
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledProfile onClick={handleClick}>
                <StyledLogo src={profileImage} alt="프로필" />
            </StyledProfile>

            {/* Menu 컴포넌트를 사용하여 클릭한 위치에 메뉴가 표시되도록 설정 */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                getContentAnchorEl={null}
            >
                {/* 메뉴 아이템 */}
                <MenuItem onClick={handleClose}>000님</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default Profile;
