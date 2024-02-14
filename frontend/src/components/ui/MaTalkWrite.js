// ./MaTalkWrite.js

import React from "react";
import { StyledTitle } from './Sns';


const MaTalk = ({ }) => {
    return (
        <div>
            <StyledTitle>마!톡</StyledTitle>
            <input type="text" placeholder="제목"/>
            <textarea>내용</textarea>
            <input type="file"/>
            <button type="submit">작성</button>
        </div>
    );
};

export default MaTalk;
