// ../ui/Profile.js

import React, { useEffect, useState } from 'react';
import profileImage from '../images/profile.svg';
import { StyledLogo, StyledProfile } from './MainHeader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styled from 'styled-components';

const StyledProfileMenu = styled.a`
    text-decoration: none; /* 링크의 밑줄 제거 */  
    color: inherit; /* 링크의 색상 제거 */
`

function Profile() {
    const [anchorEl, setAnchorEl] = React.useState(null);   // 메뉴 상태변수
    const [userData, setUserData] = useState(null); //  프로필 상태변수

    // 쿠키에 저장된 사용자 정보를 이용해 사용자 정보 불러온다. 
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/checkCookie', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error('프로필을 찾을 수 없습니다.');
                }

                // userData에 쿠키 정보를 json으로 변환시켜 저장한다.
                const userData = await response.json();

                // setUserData에 저장한다.
                setUserData(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    // 메뉴 열기 
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // 메뉴 닫기 
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledProfile onClick={handleClick}>
                <StyledLogo src={userData ? userData.response.profile_image : profileImage} alt="프로필" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
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
                
                    <>
                        <MenuItem onClick={handleClose}>{userData ? userData.response.nickname + '님' : '찾을 수 없음'}</MenuItem>
                        <Divider />
                        <StyledProfileMenu href='/profile'>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                            마이페이지
                            </MenuItem>
                        </StyledProfileMenu>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            로그아웃
                        </MenuItem>
                    </>
            </Menu>
        </>
    );
}

export default Profile;
