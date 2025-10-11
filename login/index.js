// index.js
const express = require('express'); //Node.js에서 Express 모듈을 불러오는 코드 웹 서버 기능을 추가하기 위해 Express를 불러옴 
const app = express(); //Express를 실행해서 서버 객체(app) 를 생성 express()를 호출하면 웹 애플리케이션(서버) 객체가 만들어짐 
const port = 3000; //서버가 들어올 요청을 들을(대기할) 포트 번호를 지정

const mongoose = require('mongoose');  //Mongoose(몽구스) 라이브러리를 불러오는 코드 Mongoose는 MongoDB를 쉽게 다루게 해주는 라이브러리 

//실제로 MongoDB와 연결(Connection) 을 맺는 코드
//MongoDB Atlas의 연결 URI 이걸통해 노드 서버랑 내 몽고 데이터베이스를 연결시켜 직접 통신 가능하게 함


mongoose.connect('mongodb+srv://young99_db_user:FrmcjKB3JL7IRBDa@cluster0.vtdldsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true //최신 MongoDB 드라이버 규칙에 맞게 해석하고 연결 안정성을 높이는 옵션인듯. 아직은 잘 모르겟음 
}).then(()=>console.log("몽고 디비 연결 완료")) //몽고디비 연결이 성공햇을때 실행되는 콜백
.catch(err => console.log(err))//실패하면 실행


app.get('/', (req, res) => { //클라이언트가 '/' 경로(홈페이지)에 접근했을 때 실행할 코드를 지정
  res.send('Hello World! 안녕~~!!');
});

//req: 요청(request) 객체 (클라이언트가 보낸 정보)
//res: 응답(response) 객체 (서버가 보낼 정보)

app.listen(port, () => console.log(`Example app listening on port ${port}`));



