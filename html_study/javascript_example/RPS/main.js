//이미지 자동 재생
let imgArray=new Array();
imgArray[0]="image/rock.png";
imgArray[1]="image/paper.png";
imgArray[2]="image/scissors.png";

let timer;
let num1,num2,num3;
function showimg(){
    console.log("showimg()");
    num1=Math.round(Math.random()*2);
    num2=Math.round(Math.random()*2);
    num3=Math.round(Math.random()*2);
    console.log("num1: "+num1);
    console.log("num2: "+num2);
    console.log("num3: "+num3);

    let img1=document.getElementById("loadimage1");
    let img2=document.getElementById("loadimage2");
    let img3=document.getElementById("loadimage3");
    img1.src=imgArray[num1];
    img2.src=imgArray[num2];
    img3.src=imgArray[num3];
    timer= setTimeout(showimg,100); //작동하는 함수
}

//이미지클릭 시
function imageClick(){
    console.log("imageClick()")
    clearTimeout(timer);
    console.log("참여자1: "+num1);
    console.log("참여자2: "+num2);
    console.log("참여자3: "+num3);
    rps();
  

}
function rps(){
    let result_text;
    if(num1==0){
        //주먹
        if(num2==0){
            //주먹
            if(num3==0){
                //주먹
                result_text="비김";
            }
            else if(num3==1){
                //보
                result_text="참가자1:loser 참가자2:loser 참가자3:win";
            }
            else{
                //가위
                result_text="참가자1:win 참가자2:win 참가자3:loser";
            }
        }
        else if(num2==1){
            //보
            if(num3==0){
                //주먹
                result_text="참가자1:loser 참가자2:win 참가자3:loser";
            }
            else if(num3==1){
                //보
                result_text="참가자1:loser 참가자2:win 참가자3:win";
            }
            else{
                //가위
                result_text="비김";
            }
        }
        else{
            //가위
            if(num3==0){
                //주먹
                result_text="참가자1:win 참가자2:loser 참가자3:win";
            }
            else if(num3==1){
                //보
                result_text="비김";
            }
            else{
                //가위
                result_text="참가자1:win 참가자2:loser 참가자3:loser";
            }
        }

    }
    else if(num1==1){
        //보
        if(num2==0){
            //주먹
            if(num3==0){
                //주먹
                result_text="참가자1:win 참가자2:loser 참가자3:loser";
            }
            else if(num3==1){
                //보
                result_text="참가자1:win 참가자2:loser 참가자3:win";
            }
            else{
                //가위
                result_text="비김";
            }
        }
        else if(num2==1){
            //보
            if(num3==0){
                //주먹
                result_text="참가자1:win 참가자2:win 참가자3:loser";
            }
            else if(num3==1){
                //보
                result_text="비김";
            }
            else{
                //가위
                result_text="참가자1:loser 참가자2:loser 참가자3:win";
            }
        }
        else{
            //가위
            if(num3==0){
                //주먹
                result_text="비김";
            }
            else if(num3==1){
                //보
                result_text="참가자1:loser 참가자2:win 참가자3:loser";
            }
            else{
                //가위
                result_text="참가자1:loser 참가자2:win 참가자3:win";
            }
        }
    }
    else{
        //가위
        if(num2==0){
            //주먹
            if(num3==0){
                //주먹
                result_text="참가자1:loser 참가자2:win 참가자3:win";
            }
            else if(num3==1){
                //보
                result_text="비김";
            }
            else{
                //가위
                result_text="참가자1:loser 참가자2:win 참가자3:loser";
            }
        }
        else if(num2==1){
            //보
            if(num3==0){
                //주먹
                result_text="비김"
            }
            else if(num3==1){
                //보
                result_text="참가자1:loser 참가자2:loser 참가자3:win";   
            }
            else{
                //가위
                result_text="참가자1:win 참가자2:loser 참가자3:win"; 
            }
        }
        else{
            //가위
            if(num3==0){
                //주먹
                result_text="참가자1:loser 참가자2:loser 참가자3:win"; 
            }
            else if(num3==1){
                //보
                result_text="참가자1:win 참가자2:win 참가자3:loser"; 
            }
            else{
                //가위
                result_text="비김"; 
            }
        }
    }
    result_ft(result_text);
}

function result_ft(text){
    const resultElement=document.getElementById("result");
    let result=resultElement.innerText;
    result=text;
    resultElement.innerText=result;
}