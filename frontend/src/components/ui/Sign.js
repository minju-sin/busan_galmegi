import React from "react";
import Button from '@mui/material/Button';
import { styled } from 'styled-components';

export const StyledSignWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 700px;
    margin: 100px auto;
    border-radius: 10px;
    background-color: #eee;
`;

export const StyledSign = styled.p`
    font-family: "Bold";
    font-size: 50px;
    width: 200px;
    height: 50px;
    text-align: center;
`;

export const StyledSignOne = styled.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    margin: 20px auto;
    display: flex;
    align-items: center;
`;

export const StyledSignInput = styled.input`
    width: 100%;
    max-width: 400px;
    height: 50px;
    margin-left: 45px;
    border: none; /* 테두리 없음 */
    border-radius: 5px;
`;

const Sign = () => {
    return (
        <StyledSignWrapper>
            <StyledSign>회원가입</StyledSign>
            <StyledSignOne>
                <StyledSignInput 
                    type="text" 
                    id="userId"
                    placeholder="아이디"
                />
            </StyledSignOne>
            <StyledSignOne>
                <StyledSignInput 
                    type="password" 
                    id="password"
                    placeholder="비밀번호"
                />
            </StyledSignOne>
            <StyledSignOne>
                <StyledSignInput 
                    type="text" 
                    id="name"
                    placeholder="이름"
                />
            </StyledSignOne>
            <StyledSignOne>
                <StyledSignInput 
                    type="text" 
                    id="nickname"
                    placeholder="닉네임"
                />
            </StyledSignOne>
            <StyledSignOne>
                <StyledSignInput 
                    type="text" 
                    id="email"
                    placeholder="이메일"
                />
            </StyledSignOne>
            <Button variant="contained">가입</Button>
        </StyledSignWrapper>
    );
};

export default Sign;
