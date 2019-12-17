$(document).ready(function(){

// check on CENTER START

// check on fatahillah
var fatahillah =  Cookies.get("fatahillah");
if(fatahillah){

}
else{
  $("#hero1img").unwrap();
  $("#hero1img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on diponegoro
var diponegoro =  Cookies.get("diponegoro");
if(diponegoro){

}
else{
  $("#hero2img").unwrap();
  $("#hero2img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on kebo iwa
var keboiwa =  Cookies.get("keboiwa");
if(keboiwa){

}
else{
  $("#hero3img").unwrap();
  $("#hero3img").attr("src","images/Thumbnail/Menu/lock.png")
}
// check on apang semangai
var apang =  Cookies.get("apang");
if(apang){

}
else{
  $("#hero4img").unwrap();
  $("#hero4img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on tumenggung
var tumenggung =  Cookies.get("tumenggung");
if(tumenggung){

}
else{
  $("#hero5img").unwrap();
  $("#hero5img").attr("src","images/Thumbnail/Menu/lock.png")
}
// check o CENTER ENDS
});
