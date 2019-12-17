$(document).ready(function(){

// check on WEST START

// check on keumalahayati
var keumalahayati =  Cookies.get("keumalahayati");
if(keumalahayati){

}
else{
  $("#hero1img").unwrap();
  $("#hero1img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on sisingamangaraja
var sisingamangaraja =  Cookies.get("sisingamangaraja");
if(sisingamangaraja){

}
else{
  $("#hero2img").unwrap();
  $("#hero2img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on syarif kasim ii
var syarifkasim =  Cookies.get("syarifkasim");
if(syarifkasim){

}
else{
  $("#hero3img").unwrap();
  $("#hero3img").attr("src","images/Thumbnail/Menu/lock.png")
}
// check on badaruddin ii
var badaruddin =  Cookies.get("badaruddin");
if(badaruddin){

}
else{
  $("#hero4img").unwrap();
  $("#hero4img").attr("src","images/Thumbnail/Menu/lock.png")
}

// check on siliwangi
var siliwangi =  Cookies.get("siliwangi");
if(siliwangi){

}
else{
  $("#hero5img").unwrap();
  $("#hero5img").attr("src","images/Thumbnail/Menu/lock.png")
}
// check on  WEST ENDS
});
