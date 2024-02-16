// ./ui/NaverLogin.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledNaver = styled.div`
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
  height: 50px;
`;

function NaverLogin() {
  const [naverLoginLink, setNaverLoginLink] = useState('');

  useEffect(() => {
    // 서버에서 네이버 로그인 링크를 받아옴
    axios.get('/naverlogin')
      .then(response => {
        setNaverLoginLink(response.data);
      })
      .catch(error => {
        console.error('Error fetching naver login link:', error);
      });
  }, []);

  return (
    <>
      <StyledNaver dangerouslySetInnerHTML={{__html: naverLoginLink}}></StyledNaver>
    </>
  );
}

export default NaverLogin;
