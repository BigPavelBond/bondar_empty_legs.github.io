$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('a[data-popup="true"]'),
 					close = $('.close-btn'),
 					flight = $('.flight');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	overlay.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		flight.text($(this).attr('data-flight'));
 		overlay.show();
 		modal.toggleClass('popup_active');
 	});
 });// Много кнопок - одно окно
















