// ../ui/Profile.js

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

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
        <>
            <p>
                프로필
            </p>
            <p>전화번호: {userProfile.mobile}</p>
            <p>닉네임: {userProfile.nickname}</p>
            <p>이름: {userProfile.name}</p>
            <p>프로필: <img src={userProfile.profile_image} alt="Profile" /></p>
        </>
    );
}

export default Profile;