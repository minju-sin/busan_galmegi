# 부산갈매기

# 개발 기간

2024.02.13 〰️ 2024.02.26 (10일)

# 기획

롯데 자이언츠 야구에 빠지게 되면서 경기 결과, 팬들의 단합, 소통을 위한 장을 직접 개발하면서  야구를 보고싶은 마음을 표현하기 위해 기획하였다. 

프로젝트는 자신의 취미나 좋아하는 부류를 이용해서 공부하는 게 도움이 된다고해서 주제로 선정하였다. Node.js 기초를 배운 후 바로 하는 프로젝트라 미흡한 부분이 있을 수 있다. 주로 OpenAPI를 다루는 기술과 RESTful API 를 공부하기 위한 프로젝트이다.

# 기술 스택

- 프론트앤드 (React)
    - react-router-dom v6
    - styled-Components v6
    - react-cookies
    - Axios 통신
    - Mui 라이브러리

- 백앤드 (Node.js)
    - Express
    - nodemon
    - cookie-parser

- RESTful API
    
    [0. 뷰, RESTful API 설계](https://www.notion.so/0-RESTful-API-6fe9ee840d5d4a58b2aa754e1a639c6b?pvs=21) 
    

- OpenAPI
    - 카카오 지도
    - 네이버 뉴스
    - 네이버 로그인 oAuth

# 기능

- 로그인
    
    간단 로그인 - oAuth 방식
    
    cookie 
    
- MainPage (미디어)
    - NewsPage (뉴스)
        
        네이버 뉴스 API
        
        [검색 > 뉴스 - Search API](https://developers.naver.com/docs/serviceapi/search/news/news.md#%EB%89%B4%EC%8A%A4)
        
    
    SNS
    
    Chatgpt 오픈 api이용한 기능 만들기 (선택)
    
- IntroPage (소개)
    
    사직구장
    
    문수구장
    
    야구장 위치 - 카카오 api
    
- MaTalkPage (마!톡)
    
    글 작성
    
    글 수정
    
    글 삭제
    

# 세부 내용

[0. 뷰, RESTful API 설계](https://www.notion.so/0-RESTful-API-6fe9ee840d5d4a58b2aa754e1a639c6b?pvs=21)

[1. React + Node.js + MongoDB연동](https://www.notion.so/1-React-Node-js-MongoDB-0a581ff4c933477398769b1a5abc8c2f?pvs=21)

[2. oAuth 네이버 로그인 - React + node.js (1)](https://www.notion.so/2-oAuth-React-node-js-1-624c034d9498490da5712f6a908ee42e?pvs=21)

[3. oAuth 네이버 로그인 - React + node.js (2)](https://www.notion.so/3-oAuth-React-node-js-2-69fed57dfae348eeae01752353d3e270?pvs=21)

[4. 네이버 뉴스 API ](https://www.notion.so/4-API-e83451849f7e469c9d19ee473e1148ff?pvs=21)

[5. 마!톡](https://www.notion.so/5-a717874446bb4ef38e1f8c49309036fc?pvs=21)

# 디자인

https://www.figma.com/file/F6SMWFsaoM9JTR7TBBRa4X/%EB%B6%80%EC%82%B0%EA%B0%88%EB%A7%A4%EA%B8%B0?type=design&fuid=1276466967587649196

## 프로젝트 결과

https://www.youtube.com/watch?v=7EMgJ3X_55Y

## 보완할 점

단 기간에 풀스택 개발을 하려고 하니 부족한 점이 많았습니다. 

현재는 단순한 기능들만 삽입 하였지만, [socket.io](http://socket.io) 통신을 이용한 실시간 채팅 기능을 추후에 개발할 예정입니다. 

👉 [다음페이지로 넘어가기](https://www.notion.so/0-RESTful-API-6fe9ee840d5d4a58b2aa754e1a639c6b?pvs=21)
