
$(window).load(function() {
    initializeNavigation();
});

function initializeNavigation() {

	var navBarHeight = 80;

	$("#Title-Brand").click(function() {
		$(document.body).animate({scrollTop:0}, '100', 'swing');
	});

	$("#How-It-Works-Link").click(function() {
		var height = $(".how-it-works-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

	$("#Providers-Link").click(function() {
		var height = $(".providers-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

	$("#Patients-Link").click(function() {
		var height = $(".patients-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

	$("#Privacy-Link").click(function() {
		var height = $(".privacy-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

	$("#About-Us-Link").click(function() {
		var height = $(".about-us-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

	$("#Contact-Link").click(function() {
		var height = $(".contact-us-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

	$("#Learn-More-Button").click(function() {
		var height = $(".how-it-works-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});	

	$("#Demo-Button").click(function() {
		var height = $(".contact-us-section").position().top - navBarHeight;
		$(document.body).animate({scrollTop:height}, '100', 'swing');
	});

}