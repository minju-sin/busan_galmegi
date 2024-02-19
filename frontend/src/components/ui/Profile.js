import React, { useEffect, useState } from 'react';
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userData, setUserData] = useState(null); // 사용자 정보 상태

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // 서버로부터 받은 사용자 정보에는 ID가 포함되어 있다고 가정
                const response = await axios.get(`/users/${userData.id}`);
                setUserData(response.data.user);
            } catch (err) {
                console.error("프로필을 찾을 수 없습니다.", err);
            }
        };

        // userData가 설정되면(fetchUserProfile 함수가 최초로 실행될 때) 프로필 정보를 요청
        if (userData) {
            fetchUserProfile();
        }
    }, [userData]);

    return (
        <>
            <StyledProfile onClick={handleClick}>
                <StyledLogo src={userData.profile_image} alt="프로필" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
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
                {userData && (
                    <>
                        <MenuItem onClick={handleClose}>{userData.nickname}님</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            마이페이지
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            로그아웃
                        </MenuItem>
                    </>
                )}
            </Menu>
        </>
    );
}

export default Profile;
