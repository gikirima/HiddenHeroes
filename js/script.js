// JavaScript Document

var helpButton = document.getElementsByClassName("help-button"[0]);
var regionButton = document.getElementById("region-button");

$(document).ready(function(){
    
});
regionButton.onclick = function(){
	$("#region-modal").modal("show");
	
}

helpButton.onclick = function(){
    $("#help-modal").modal("show");
}