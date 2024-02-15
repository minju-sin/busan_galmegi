// ./ui/NaverLogin.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <div dangerouslySetInnerHTML={{__html: naverLoginLink}}></div>
    </div>
  );
}

export default NaverLogin;
