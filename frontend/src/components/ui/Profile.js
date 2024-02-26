// ../ui/Profile.js

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { StyledTitle, StyledIntro, StyledIntroP } from '../styles/Intro/intro';
import { StyledLogo } from './MainHeader';
import {StyledProfileWrapper, StyledTableWrapper, StyledTable, StyledTableRow, StyledTableHeaderCell, StyledTableCell } from '../styles/Profile/profile';
import { fetchUserProfile } from '../hooks/FetchUserProfile';

function Profile() {
    const [cookies] = useCookies(['userData']); // 쿠키에서 userData 가져오기
    const [userProfile, setUserProfile] = useState(null); // 사용자 프로필 상태

    useEffect(() => {
        fetchUserProfile(cookies, setUserProfile); // 모듈화된 함수 호출
    }, [cookies.userData]); //  쿠키의 userData가 변경될 때마다 실행


    // 사용자 프로필이 로드되지 않았을 때
    if (!userProfile) {
        return <div>로딩...</div>;
    }

    return (
        <StyledProfileWrapper>
            <StyledTitle>
                마이페이지
            </StyledTitle>

            <StyledIntro style={{ display: 'grid', placeItems: 'center' }}>
                <StyledLogo src={userProfile.profile_image} alt="프로필사진" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
                <StyledIntroP style={{ display: 'grid', placeItems: 'center' }}>{userProfile.nickname}</StyledIntroP>
            </StyledIntro>

            <StyledTableWrapper>
                <StyledTable>
                    <tbody>
                        <StyledTableRow>
                            <StyledTableHeaderCell>이름</StyledTableHeaderCell>
                            <StyledTableCell>{userProfile.name}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableHeaderCell>닉네임</StyledTableHeaderCell>
                            <StyledTableCell>{userProfile.nickname}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableHeaderCell>전화번호</StyledTableHeaderCell>
                            <StyledTableCell>{userProfile.mobile}</StyledTableCell>
                        </StyledTableRow>
                    
                    </tbody>
                </StyledTable>
            </StyledTableWrapper>
        </StyledProfileWrapper>
    );
}

export default Profile;