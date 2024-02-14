import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainImg1 from '../images/MainImg1.jpg';
import MainImg2 from '../images/MainImg2.jpg';
import MainImg3 from '../images/MainImg3.jpg';

const StyledMiWrapper = styled.div`
    width: 100%;
    height: 600px;
    margin: 10px auto;
    overflow: hidden; /* 이미지가 넘칠 경우 가려줍니다. */
    position: relative; /* 자식 요소의 위치를 상대적으로 설정합니다. */
`;

const StyledMainImg = styled.img`
    width: 100%;
    height: 100%;
    margin: 0;
    transition: transform 0.5s ease; /* 이미지 전환에 효과를 부여합니다. */
    position: absolute; /* 이미지를 위치시킵니다. */
    left: 0; /* 부모 요소의 왼쪽에 이미지를 배치합니다. */
    top: 0; /* 부모 요소의 위쪽에 이미지를 배치합니다. */
`;

const MainImage = () => {
    const images = [MainImg1, MainImg2, MainImg3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // 5초마다 이미지를 변경하는 타이머 설정
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5초

        // 컴포넌트가 언마운트될 때 타이머 제거
        return () => clearInterval(intervalId);
    }, []); // 빈 배열을 전달하여 최초 렌더링 후 한 번만 실행되도록 함

    return (
        <StyledMiWrapper>
            {images.map((image, index) => (
                <StyledMainImg 
                    key={index} 
                    src={image} 
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)`, left: `${index * 100}%` }} 
                />
            ))}
        </StyledMiWrapper>
    );
};

export default MainImage;
