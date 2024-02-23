import { styled } from 'styled-components';

export const StyledMoreLink = styled.a`
    color: #9B9A9A;
    margin-left: 900px;
    text-decoration: none; /* 밑줄 제거 */
    font-size: 14px; /* 더보기 글씨 크기 조정 */

    cursor: pointer;
    transition: color 0.3s; 
    
    &:hover {
        color: #D00F31; 
    }
`;

export const StyledMoreImg = styled.img`
    width: 14px;
    height: 14px;
    flex-shrink: 0;
`;

export const StyledNewsWrapper = styled.div`
    display: flex;
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    max-width: 1080px;
    height: 270px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
`;

export const StyledNewsImg = styled.img`
    flex-direction: row;
    width: 295px;
    height: 270px;
    flex-shrink: 0;
    margin: 0 30px 50px; /* 좌우 여백 20px 추가 */
    align-items: center;
    border-radius: 10px;
`;