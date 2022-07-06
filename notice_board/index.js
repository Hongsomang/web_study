const http=require('http'); //http모듈을 불러와서 모듈를 해당변수에 할당

const express=require('express')  //express 모듈을 해당 변수에 할당 express를 사용하는 이유? 라우팅과 로직의 모듈화를 위해 사용c
const app=express(); //app이라는 변수에 expressg함수 변환의값을 저장

const dirname='/Users/hongsomang/web_study/notice_board/';
/*const hostname='127.0.0.1';  //ip 주소
const port=3000; //포트번호*/

var port = app.listen(process.env.PORT || 5050);

app.get('/',(req,res)=>{   //get으로 요청
    res.sendFile(dirname+"intro/index.html") //요청되고 나면 보냄
});

/*const sever=http.createServer((req,res)=>{   //createServer메소드가 호출하게 되면 server 객체가 반환
    res.statusCode=200;   //응답 상태값
    res.setHeader('Content-Type','text/plain');  
    res.end('Hello world!');  //클라이언트로 응답값 전송
});*/

//const server=http.createServer(app);


app.listen(port,()=>{  //list메소드가 실행하면 서버시작
    
    console.log('Server start! ');
});