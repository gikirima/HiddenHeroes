$(document).ready(function(){

// check on EAST START

// check on ukung tewu
var ukung =  Cookies.get("ukung");
if(ukung){

}
else{
  $("#hero1img").unwrap();
  $("#hero1img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on hasanuddin
var hasanuddin =  Cookies.get("hasanuddin");
if(hasanuddin){

}
else{
  $("#hero2img").unwrap();
  $("#hero2img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on pattimura
var pattimura =  Cookies.get("pattimura");
if(pattimura){

}
else{
  $("#hero3img").unwrap();
  $("#hero3img").attr("src","images/Thumbnail/Menu/lock.png")
}
// check on wona kaka
var wonakaka =  Cookies.get("wonakaka");
if(wonakaka){

}
else{
  $("#hero4img").unwrap();
  $("#hero4img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on gurabesi
var gurabesi =  Cookies.get("gurabesi");
if(gurabesi){

}
else{
  $("#hero5img").unwrap();
  $("#hero5img").attr("src","images/Thumbnail/Menu/lock.png")
}
// check o EAST ENDS
});
