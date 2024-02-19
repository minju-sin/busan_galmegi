// ../ui/Profile.js

import React, { useState, useEffect } from 'react';
import profileImage from '../images/profile.svg';
import { StyledLogo, StyledProfile } from './MainHeader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import axios from 'axios';

function Profile() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [userName, setUserName] = useState(''); // 사용자 이름 상태 변수

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        // 사용자 이름을 불러오는 함수 호출
        fetchUserName();
    }, []);

    const fetchUserName = async () => {
        try {
            const response = await axios.get('/users/:id'); // 서버에서 사용자 이름 가져오기
            setUserName(response.data.userName); // 사용자 이름 설정
        } catch (error) {
            console.error('사용자 이름을 불러오지 못했습니다.', error);
        }
    };

    return (
        <>
            <StyledProfile onClick={handleClick}>
                <StyledLogo src={profileImage} alt="프로필" />
            </StyledProfile>

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
                {/* 사용자 이름을 표시하는 메뉴 아이템 */}
                <MenuItem onClick={handleClose}>{userName}님</MenuItem>
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
