import React, { useEffect, useState } from "react";
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
import { fetchUserProfile } from '../hooks/FetchUserProfile';
import { useCookies } from 'react-cookie';

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

function MaTalkWrite() {
  const [cookies] = useCookies(['userData']); // 쿠키에서 userData 가져오기
  const [userProfile, setUserProfile] = useState(null); // 사용자 프로필 상태

  useEffect(() => {
    fetchUserProfile(cookies, setUserProfile); // 모듈화된 함수 호출
  }, [cookies.userData]); // 쿠키의 userData가 변경될 때마다 실행

  const [horizontalAlignment, setHorizontalAlignment] = useState("left"); // 텍스트의 가로 정렬 상태를 관리하는 상태 변수
  const [verticalAlignment, setVerticalAlignment] = useState("middle"); // 텍스트의 세로 정렬 상태를 관리하는 상태 변수
  const [formats, setFormats] = useState([]); // 적용된 텍스트 서식을 관리하는 상태 변수

  const [showCompactPicker, setShowCompactPicker] = useState(false); // 컬러 피커의 표시 여부를 관리하는 상태 변수
  const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 }); // 컬러 피커의 위치를 관리하는 상태 변수
  const [fontColor, setFontColor] = useState("#000000"); // 텍스트의 글자색을 관리하는 상태 변수
  const [bgColor, setBgColor] = useState("#FFFFFF"); // 텍스트의 배경색을 관리하는 상태 변수
  const [titleValue, setTitleValue] = useState(""); // 제목 관리하는 상태 변수
  const [commentValue, setCommentValue] = useState(""); // 내용을 관리하는 상태 변수
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

  // 글 작성 요청 핸들러 함수
  const handlePostTalk = async () => {
    if (!userProfile) {
      console.error('사용자 프로필이 없습니다.');
      return;
    }

    // 요청 데이터 생성
    const postData = {
      title: titleValue, // 제목은 현재 텍스트 내용으로 설정
      comment: commentValue, // 내용은 현재 텍스트 내용으로 설정
      nickname: userProfile.nickname // 사용자 프로필에서 닉네임 가져오기
    };

    try {
      const response = await fetch('/talks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('글 작성 성공');
        window.location.href = '/maTalk';
      } else {
        console.error('글 작성 실패');
        // 실패 시 필요한 처리 추가
      }
    } catch (error) {
      console.error('글 작성 중 오류 발생:', error);
      // 오류 발생 시 필요한 처리 추가
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
              placeholder="제목"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
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
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
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

              <Button variant="contained" style={{display: 'block', margin: 'auto'}} onClick={handlePostTalk}>작성하기</Button>
          </StyledMtWrite>
      </StyledIntro>
    </>
  );
};

export default MaTalkWrite;
