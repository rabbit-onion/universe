# UNIVERSE

> **React기반 애니메이션 OTT 서비스** </br> **개발 기간 : 2025.02.01 ~~ XX**

## 배포 주소

> **vercel 주소 :** https://universe-ivory-one.vercel.app/

## 팀원 구성 

천사랑 : 팀장 / 개발
 
박은주 : Component 등록 

박준용 : 개발

오하늘 : 디자인



## 프로젝트 소개

애니메이션 OTT 서비스 'LAFTEL'을 참고하여 만든 웹페이지입니다.


## 주요 기능 📦

### ⭐️ 다양한 작품 상세정보 확인 및 시청 기능 
- 유니버스 독점작, -- 등 다양한 애니메이션 작품 제공
- 추후 지속적으로 작품 추가 및 업로드 예정

### ⭐️ 작품에 대한 자유로운 게시글 및 댓글 작성 가능
- 커뮤니티 기능을 통해 작품 관련 게시글 및 댓글 작성 가능

### ⭐️ 태그 검색 기능
- 작품에 포함된 태그를 통해 해당되는 작품들을 검색 가능


## 기술 스택 📚

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)           

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

### Communication
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)


## 아키텍쳐 :file_folder:

### 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   ├── pattern
│   │   └── video
│   └── video
└── src
    ├── assets
    │   └── api : api, db 관련 
    ├── common : footer, header, layout 관련
    │   ├── footer
    │   ├── header
    │   ├── Layout.jsx
    │   └── ModalLayout.jsx
    ├── components : 각 page에 해당하는 components
    │   ├── banner
    │   ├── commnunity
    │   ├── home
    │   ├── layout
    │   ├── login
    │   ├── main
    │   ├── mypage
    │   ├── pagination
    │   ├── profile
    │   ├── profile
    │   └── index.js
    ├── pages : 각 page에 해당하는 index.js
    ├── store : Slice 구조들
    ├── styled : Global Styled
    ├── ui : button, card 규격에 관련된 components
    ├── App.css
    ├── App.jsx : 각 페이지의 route
    ├── index.css
    └── main.jsx : provider, store

```

