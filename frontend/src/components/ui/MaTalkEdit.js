import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import VerticalAlignCenterIcon from "@mui/icons-material/VerticalAlignCenter";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from '@mui/material/Button';
import { CompactPicker } from "react-color";
import { StyledTitle, StyledIntro } from '../styles/Intro/intro';
import { StyledMtCommnet, StyledMtFile, StyledMtTitle, StyledMtWrite } from "../styles/MaTalk/write";

// 토글 버튼 그룹 스타일
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

function MaTalkEdit() {
    const { id } = useParams(); // URL 파라미터에서 게시글 ID 추출
    const [title, setTitle] = useState(""); // 제목을 관리하는 상태 변수
    const [comment, setComment] = useState(""); // 내용을 관리하는 상태 변수

    const [horizontalAlignment, setHorizontalAlignment] = useState("left"); // 텍스트의 가로 정렬 상태를 관리하는 상태 변수
    const [verticalAlignment, setVerticalAlignment] = useState("middle"); // 텍스트의 세로 정렬 상태를 관리하는 상태 변수
    const [formats, setFormats] = useState([]); // 적용된 텍스트 서식을 관리하는 상태 변수

    const [showCompactPicker, setShowCompactPicker] = useState(false); // 컬러 피커의 표시 여부를 관리하는 상태 변수
    const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 }); // 컬러 피커의 위치를 관리하는 상태 변수
    const [fontColor, setFontColor] = useState("#000000"); // 텍스트의 글자색을 관리하는 상태 변수
    const [bgColor, setBgColor] = useState("#FFFFFF"); // 텍스트의 배경색을 관리하는 상태 변수
    const [file, setFile] = useState(null); // 첨부된 파일을 관리하는 상태 변수

    // 가로 정렬 변경 핸들러 함수
    const handleAlignment = (event, newAlignment, type) => {
        if (type === "horizontal") setHorizontalAlignment(newAlignment);
        else if (type === "vertical") setVerticalAlignment(newAlignment);
    };

    // 텍스트 서식 변경 핸들러 함수
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    // 컬러 피커 토글 핸들러 함수
    const handleToggleCompactPicker = (event, type) => {
        const iconButton = event.currentTarget;
        const rect = iconButton.getBoundingClientRect();
        const pickerTop = rect.bottom + window.scrollY;
        const pickerLeft = rect.left + window.scrollX;

        setPickerPosition({ top: pickerTop, left: pickerLeft });
        setShowCompactPicker((prev) => !prev);
    };

    // 컬러 변경 완료 핸들러 함수
    const handleChangeComplete = (color) => {
        let colorType = formats.includes("fontColor") ? "fontColor" : "bgColor";

        if (colorType === "fontColor") setFontColor(color.hex);
        else setBgColor(color.hex);
    };

    // 컬러 피커 랜더링 함수
    const getColorPicker = () => {
        let colorType = formats.includes("fontColor") ? "fontColor" : "bgColor";
        return (
        <CompactPicker
            color={colorType === "fontColor" ? fontColor : bgColor}
            onChangeComplete={handleChangeComplete}
        />
        );
    };

    // 컬러 피커 닫기 핸들러 함수
    const handleClose = () => {
        let fms = formats.filter((item) => !["fontColor", "bgColor"].includes(item));
        setFormats(fms);

        setShowCompactPicker(false);
    };

    // 파일 선택 핸들러 함수
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };


    // 페이지 로드 시 기존 게시글 정보 불러오기
    useEffect(() => {
        const fetchTalk = async () => {
            try {
                const response = await fetch(`/talks/${id}`);
                if (!response.ok) {
                    throw new Error('게시글을 가져오는데 실패했습니다.');
                }
                const data = await response.json();
                setTitle(data.title);
                setComment(data.comment);
            } catch (error) {
                console.error('게시글을 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchTalk();
    }, [id]);

    // 게시글 수정 핸들러 함수
    const handleEdit = async () => {
        try {
            const response = await fetch(`/talks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    comment: comment
                })
            });

            if (!response.ok) {
                throw new Error('게시글을 수정하는데 실패했습니다.');
            }

            // 수정이 완료되면 마!톡으로 이동
            window.location.href = '/maTalk';
        } catch (error) {
            console.error('게시글을 수정하는 중 오류가 발생했습니다:', error);
        }
    };


    return (
        <>
        <StyledIntro>
            <StyledTitle>
                글쓰기
            </StyledTitle>
            
            <StyledMtWrite>
                {/* 제목 입력란 */}
                <StyledMtTitle
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                />

                {/* 파일 첨부 */}
                <StyledMtFile type="file" onChange={handleFileChange} />

                {/* 텍스트 정렬, 서식 설정 */}
                <Box sx={{ m: 2 }}>
                <Paper
                    elevation={0}
                    sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    }}
                >
                    {/* 텍스트 가로 정렬 */}
                    <StyledToggleButtonGroup
                    size="small"
                    value={horizontalAlignment}
                    exclusive
                    onChange={(e, alignment) => handleAlignment(e, alignment, "horizontal")}
                    aria-label="text alignment"
                    >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    </StyledToggleButtonGroup>

                    {/* 텍스트 세로 정렬 */}
                    <StyledToggleButtonGroup
                    size="small"
                    value={verticalAlignment}
                    exclusive
                    onChange={(e, alignment) => handleAlignment(e, alignment, "vertical")}
                    aria-label="text alignment"
                    >
                    <ToggleButton value="top" aria-label="top aligned">
                        <VerticalAlignTopIcon />
                    </ToggleButton>
                    <ToggleButton value="middle" aria-label="middle">
                        <VerticalAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="bottom" aria-label="bottom aligned">
                        <VerticalAlignBottomIcon />
                    </ToggleButton>
                    </StyledToggleButtonGroup>

                    <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

                    {/* 텍스트 서식 설정 */}
                    <StyledToggleButtonGroup
                    size="small"
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                    >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="fontColor"
                        aria-label="fontColor"
                        onClick={(e) => handleToggleCompactPicker(e, "fontColor")}
                    >
                        <ColorizeIcon />
                        <ArrowDropDownIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="bgColor"
                        aria-label="bgColor"
                        onClick={(e) => handleToggleCompactPicker(e, "bgColor")}
                    >
                        <FormatColorFillIcon />
                        <ArrowDropDownIcon />
                    </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>

                {/* 컬러 피커 */}
                {showCompactPicker && (
                    <div
                    className="compact-picker-container"
                    style={{
                        position: "absolute",
                        top: pickerPosition.top + "px",
                        left: pickerPosition.left + "px",
                    }}
                    >
                    <div
                        style={{
                        position: "fixed",
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        left: "0px",
                        }}
                        onClick={handleClose}
                    />
                    {getColorPicker()}
                    </div>
                )}
                </Box>

                {/* 내용 입력란 */}
                <StyledMtCommnet
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                    fontWeight: formats.includes("bold") ? "bold" : "normal",
                    fontStyle: formats.includes("italic") ? "italic" : "normal",
                    textDecoration: formats.includes("underlined") ? "underline" : "none",
                    color: fontColor,
                    backgroundColor: bgColor,
                    textAlign: horizontalAlignment,
                    verticalAlign: verticalAlignment,
                    }}
                    rows={10}
                    cols={50}
                />

                <Button variant="contained" style={{display: 'block', margin: 'auto'}} onClick={handleEdit}>저장하기</Button>
            </StyledMtWrite>
        </StyledIntro>
        </>
    );
};

export default MaTalkEdit;
