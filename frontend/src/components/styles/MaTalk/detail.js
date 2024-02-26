import styled from "styled-components";

export const StyledDetailHeader = styled.a`
    width: 50px;
    font-family: 'Regular';
    font-size: 18px;
    text-decoration: none;
    color: inherit;

    cursor: pointer;
    transition: color 0.3s; 
    
    &:hover {
        color: #D00F31; 
    }
`;

export const StyledDetailText = styled.p`
    height: 350px;
    font-family: 'Regular';
    font-size: 20px;
`;