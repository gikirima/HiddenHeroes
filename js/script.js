// JavaScript Document

//make sure that all document is loaded first before applying js
$(document).ready(function(){

$("#local-button").click(function(){
// toggle heroImage
	$("#hero").toggleClass("hero-img");
//toggle to tab 2
$("#hero-info").toggle();
$("#local-info").toggle();
//toggle animation class
$("#local-info").toggleClass("fadeInLeft");

});

});
