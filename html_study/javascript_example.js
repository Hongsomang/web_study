/*document.write("hello");*/
function get_ymd(){
  const year=document.getElementById("year").value;
  const month=document.getElementById("month").value;
  const day=document.getElementById("day").value;
  const resultElement=document.getElementById("result");
  let result=resultElement.innerText;
  let date;
  console.log(year);
  console.log(month);
  console.log(day);
  if(month.length>0){
    if(day.length>0){
      date=year+"/"+month+"/"+day;
      console.log("day:"+date);
    }
    else {
      date=year+"년"+" "+month+"월";
            console.log("month:"+date);
    }
  }
  else{
    date=year+"년";
    console.log(date);
        //  console.log("reuslt:"+result.value);
  }
  result=date;
  resultElement.innerText=result;
}
