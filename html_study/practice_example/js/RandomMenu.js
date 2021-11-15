function menu_choose(menu){
  let arrMenu=new Array("케이크","햄버거","스테이크","토스트");
  let arrMenuURL=new Array("cake","hamburger","steak","toast");

  const menuNameElement=document.getElementById("menu_name");
  let menuName=menuNameElement.innerText;

  const menu_img=document.getElementById("menu_img");

  menuName=arrMenu[menu];
  menuNameElement.innerText=menuName;
  menu_img.src="../img/"+arrMenuURL[menu]+".jpg";
  for(var i=0;i<4;++i){
    console.log(i);
   if(i==menu){
      document.getElementById(arrMenuURL[menu]).style.border="4px solid #4646CD";
      document.getElementById(arrMenuURL[menu]).style.opacity="1.0";
      //console.log(arrMenuURL[menu]);
    }
    else{
    //  console.log(arrMenuURL[i]);
      document.getElementById(arrMenuURL[i]).style.border="0";
        document.getElementById(arrMenuURL[i]).style.opacity="0.5";
    }
  }
  console.log(arrMenu[menu]);
}
function randomClick(){
  const randomNum = Math.random() * 4
  const randomNumFloor = Math.floor(randomNum)
  console.log("랜덤"+randomNumFloor);
  menu_choose(randomNumFloor);
}
