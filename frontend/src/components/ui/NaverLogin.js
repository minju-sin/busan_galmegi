import React, { useEffect } from 'react';

function NaverLogin() {
  const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
  const callbackUrl = process.env.REACT_APP_URL;

  useEffect(() => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: clientId,
      callbackUrl: callbackUrl,
      loginButton: { color: "green", type: 2, height: 40 }
    });
    naverLogin.init();
  }, [clientId, callbackUrl]);

  return (
    <div id="naverIdLogin"></div>
  );
}

export default NaverLogin;
