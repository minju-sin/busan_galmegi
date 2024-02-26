// ../ui/MaTalkDetail.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { StyledIntro, StyledTitle } from "../styles/Intro/intro";
import { StyledDetailHeader, StyledDetailText } from "../styles/MaTalk/detail";
import { StyledMainText } from "../styles/News/news";
import { formatDate } from "../common/formatDate";

function MaTalkDetail() {
    const { id } = useParams(); // URL 파라미터에서 게시글 ID 추출
    const [talk, setTalk] = useState(null);

    useEffect(() => {
        const fetchTalk = async () => {
            try {
                const response = await fetch(`/talks/${id}`); 
                // 서버의 해당 엔드포인트로 GET 요청 보내기
                if (!response.ok) {
                    throw new Error('게시글을 가져오는데 실패했습니다.');
                }
                const data = await response.json(); 
                // JSON 형태로 응답 받기
                setTalk(data); // 게시글 상태에 저장하기
            } catch (error) {
                console.error('게시글을 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchTalk(); // 페이지가 로드될 때 게시글을 가져오는 함수 호출
    }, [id]); // useEffect의 의존성 배열에 id 추가하여 해당 값이 변경될 때마다 useEffect가 재실행되도록 설정

    const handleDelete = async () => {
        try {
            const response = await fetch(`/talks/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // 삭제 성공 시 메인 페이지로 이동
                window.location.href = '/maTalk';
            } else {
                throw new Error('게시글 삭제에 실패했습니다.');
            }
        } catch (error) {
            console.error('게시글을 삭제하는 중 오류가 발생했습니다:', error);
        }
    };

    return (
        <StyledIntro>
            {talk && (
                <>
                    <StyledDetailHeader href="/maTalk">마!톡</StyledDetailHeader>
                    <StyledTitle>{talk.title}</StyledTitle>
                    <StyledMainText>{talk.nickname} {formatDate(talk.createdAt)}</StyledMainText>
                    <StyledDetailText>{talk.comment}</StyledDetailText>

                    <ButtonGroup
                        variant="contained"
                        aria-label="Basic button group"
                        sx={{
                            margin: '20px 400px 20px'
                        }}
                    >
                        <Link to={`/maTalk/${talk._id}/edit`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button 
                                sx={{ 
                                    backgroundColor: '#041E42', 
                                    color: 'white', 
                                    '&:hover': { backgroundColor: '#303f9f' }, 
                                    fontFamily: "Regular",
                                    width: '150px',
                                    height: '50px'
                                }}
                            >
                                수정하기
                            </Button>
                        </Link>

                        <Button 
                            onClick={handleDelete}
                            sx={{ 
                                backgroundColor: '#D00F31',
                                color: 'white', 
                                '&:hover': { backgroundColor: '#d32f2f' }, 
                                fontFamily: "Regular",
                                width: '150px',
                                height: '50px'
                            }}
                        >
                            삭제하기
                        </Button>
                    </ButtonGroup>

                </>
            )}
        </StyledIntro>
    );
}

export default MaTalkDetail;
