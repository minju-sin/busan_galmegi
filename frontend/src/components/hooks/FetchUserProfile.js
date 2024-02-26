// 사용자 정보 불러오기

export const fetchUserProfile = async (cookies, setUserProfile) => {

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