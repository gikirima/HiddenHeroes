// JavaScript Document


//make sure that all document is loaded first before applying js
$(document).ready(function(){

	$(function(){
		$("#loader").fadeOut(600, function(){
			$("#loader").remove();
		});
	});

$("#local-button").click(function(){
// toggle heroImage
	$("#hero").toggleClass("hero-img");
//toggle to tab 2
$("#hero-info").toggle();
$("#local-info").toggle();
//toggle animation class
$("#local-info").toggleClass("fadeInLeft");
$("body").toggleClass("bg-1 bg-2");

$("#local-text").text($("#local-text").text() == '現地情報' ? 'ヒーロー情報' : '現地情報');




});

});
