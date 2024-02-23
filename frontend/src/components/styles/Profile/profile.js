import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    height: 670px;
    margin: 0 auto;
`;

export const StyledTableWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 70px auto;
`;

export const StyledTable = styled.table`
    width: 100%;
    max-width: 500px;
    margin: 0, auto;
    border-collapse: collapse;
    font-family: 'Regular';
    font-size: 15px;

`;

export const StyledTableRow = styled.tr`
    border: 1px solid black;
    border-radius: 10px;
`;

// 테이블 제목 
export const StyledTableHeaderCell = styled.th`
    padding: 20px;
    text-align: center;
    border: 1px solid black;
`;

// 테이블 값 
export const StyledTableCell = styled.td`
    padding: 10px;
    text-align: center;
`;