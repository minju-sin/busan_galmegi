// ../ui/Profile.js

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { StyledTitle } from './Sns';
import { StyledIntro, StyledIntroP } from './Sajik';
import { StyledLogo } from './MainHeader';


const StyledProfileWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    height: 670px;
    margin: 0 auto;
`;

const StyledTableWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 70px auto;
`;

const StyledTable = styled.table`
    width: 100%;
    max-width: 500px;
    margin: 0, auto;
    border-collapse: collapse;
    font-family: 'Regular';
    font-size: 15px;

`;

const StyledTableRow = styled.tr`
    border: 1px solid black;
    border-radius: 10px;
`;

// 테이블 제목 
const StyledTableHeaderCell = styled.th`
    padding: 20px;
    text-align: center;
    border: 1px solid black;
`;

// 테이블 값 
const StyledTableCell = styled.td`
    padding: 10px;
    text-align: center;
`;

function Profile() {
    const [cookies] = useCookies(['userData']); // 쿠키에서 userData 가져오기
    const [userProfile, setUserProfile] = useState(null); // 사용자 프로필 상태

    useEffect(() => {
        const fetchUserProfile = async () => {

        try {
            if (!cookies.userData) {
            throw new Error('쿠키에서 사용자 정보를 찾을 수 없습니다.');
        }

        // 쿠키에서 사용자 ID 추출한다.
        const userId = cookies.userData.response.id;

        // 사용자 프로필 정보를 가져오기 위해 서버로 요청
        const response = await fetch(`/users/${userId}`, {
            method: 'GET',
            credentials: 'include', // 쿠키 전송을 위해 필요한 옵션
        });

        if (!response.ok) {
            throw new Error('사용자 프로필을 불러오는데 실패했습니다.');
        }

        // 사용자 프로필 정보를 JSON 형태로 저장한다.
        const userProfile = await response.json();

        //setUserProfile에 프로필 정보 저장한다.
        setUserProfile(userProfile);
        } catch (error) {
            console.error(error.message);
        }
    };

    fetchUserProfile();
    }, [cookies.userData]); // 쿠키의 userData가 변경될 때마다 실행한다.

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