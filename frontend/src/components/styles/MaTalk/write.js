import styled from "styled-components";

// 글 작성 전체 div 
export const StyledMtWrite = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`;

// 파일 첨부 디자인 
export const StyledMtFile = styled.input`
    width: 100%;
    max-width: 1080px;
    font-family: "Regular";
    margin: 0 20px 10px;
    font-size: 15px;
`;

// 제목 디자인 
export const StyledMtTitle = styled.input`
    width: 100%;
    max-width: 1080px;
    font-family: "Regular";
    margin: 10px auto 10px;
    font-size: 30px;
    border: none;
    border-bottom : 3px solid #041E42;
`;

// 내용 디자인
export const StyledMtCommnet = styled.textarea`
    resize: none;
    width: 100%;
    maxWidth: 1080px;
    height: 300px;
    margin: 10px auto 10px;
    padding: 8px;
    fontFamily: "Regular";
    fontSize: 15px;
    overflow: 300px; // 자동 스크롤
    border: 3px solid #041E42;
    border-radius: 10px;
`;