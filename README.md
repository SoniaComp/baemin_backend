# baemin_backend

## 개발환경
1. VSCODE 설치

### 수동

### 자동 (dev 브랜치)
1. 폴더 만들고 싶은 디렉토리에서 'baemin'폴더를 만들어봅시다.

```
$ npm install express-generator -g
$ express --view=pug baemin
```

2. 자동 생성 폴더로 서버 구동하기
```
$ cd baemin
$ npm install # pacakage.json에 있는 모듈 설치
$ DEBUG=baemin:* npm start
```

* 127.0.0.1:3000/
* 127.0.0.1:3000/users

3. URL 설정(라우터)

* 127.0.0.1:3000/
* 127.0.0.1:3000/users
