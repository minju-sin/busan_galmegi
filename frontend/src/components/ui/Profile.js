// ./ui/Profile.js

// ./ui/NaverLogin.js

import React from 'react';
import profileImage from '../images/profile.svg';
import { StyledLogo } from './MainHeader';


function Profile() {

    return (
        <>
            <StyledLogo src={profileImage} alt="프로필"/>
        </>
    );
}

export default Profile;
