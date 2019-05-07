# Nomadcoin

nodejs를 사용하여 비트코인 클론하기

## 설치 패키지

```bash
# 블록 해시 만들기 위한 패키지
yarn add crypto-js

yarn add express morgan body-parser

yarn global add nodemon

yarn add ws
```

## scripts

```bash
# 개발 모드 실행
yarn run dev
```

## routes

1. 블록체인 정보 가져오기 GET /blocks
2. 블록체인 생성 POST /blocks { data : "" }
