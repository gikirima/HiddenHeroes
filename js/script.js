// JavaScript Document
/*declare var to get elements from the html*/
var helpButton = document.getElementsByClassName("help-button"[0]);
var regionButton = document.getElementById("region-button");

/*make sure that all document is loaded first before applying js*/
$(document).ready(function(){
    
/*create function on click for region-modal*/
regionButton.onclick = function(){
	$("#region-modal").modal("show");
	
}

/*create function on click for help-modal*/
helpButton.onclick = function(){
    $("#help-modal").modal("show");
}

});