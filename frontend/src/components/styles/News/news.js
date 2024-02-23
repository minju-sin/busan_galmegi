import styled from "styled-components";

export const StyledNewsDiv = styled.div`
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s; 
    
    &:hover {
        color: #D00F31; 
    }
`;

export const StyledMainImg = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border-radius: 10px;
`;

export const StyledMainTextContainer = styled.div`
    flex: 1;
`;

export const StyledMainTitle = styled.p`
    font-family: 'Bold';
    font-size: 25px;
    margin-bottom: 30px;
`;

export const StyledMainText = styled.p`
    font-family: 'Regular';
    font-size: 15px;
`;