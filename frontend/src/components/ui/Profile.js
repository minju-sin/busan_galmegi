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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledProfile onClick={handleClick}>
                {/* <StyledLogo src={userData.profile_image} alt="프로필" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> */}
                <StyledLogo src={profileImage} alt="프로필" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
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
                        <MenuItem onClick={handleClose}>111님</MenuItem>
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
            </Menu>
        </>
    );
}

export default Profile;
