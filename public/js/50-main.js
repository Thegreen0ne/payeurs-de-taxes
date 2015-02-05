// Fastclick
// ------------------
$(function() {
    FastClick.attach(document.body);
});

// Portfolio
// ------------------
$(".item-choice a").click(function(e){
   e.preventDefault();
});

$('#Grid').mixitup();

// Load more articles
$("#moreArticles").click(function(e) {
	e.preventDefault();
	$.ajax({
		type: "GET",
		url: "/getMoreArticles",
		dataType: "json",
		data: {offset: offset},
		success: function(resp) {
			offset += 2;
			$("#sideContent").append(resp);
		},
		error: function(resp) {
			console.log('error!');
		}
	});
});


// Manage the registration directly into the backend

// // register_login
// $("#login").click(function(){
// 	var user = $("#username").val();
// 	var pass = $("#pass").val();
// 	$.ajax({
// 		url: '/login',
// 		type: 'POST',
// 		data:{
// 			username: user,
// 			password: pass
// 		},
// 		success: function(data) {
// 			if(data == "fail"){
// 				$(".error").toggleClass("hidden");
// 				setTimeout(function(){
// 					$(".error").toggleClass("hidden");
// 				}, 1750);
// 			}
// 			else{
// 				location.reload('/');
// 			}
// 		}
// 	});
// });