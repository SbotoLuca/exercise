$.getJSON('https://api.unsplash.com/photos/?client_id=VZSVVIiR1McDseDmZ_zo50nieFJ8r4JQD9fxdb6iyeA', function(data) {
	$.each(data, function(index, value){
		var name = value.user.name;
		var profileimage = value.user.profile_image.small;
		var imageurl = value.urls.regular;
		var likes = value.likes;
		var altDescription = value.alt_description;
		var ident = value.id;
		var username = value.user.username;
		$('.list').append('<div class="all"><img class="thumb" src="'+ profileimage +'"><a href="profile.html?user='+ username +'"><h2>' + name + '</h2></a><a class="'+ ident +'" href="#' + ident + '"><div class="image"><img src="'+ imageurl +'"></div></a><ul class="actions"><li class="like"><input type="checkbox"></li><li class="comment"><input type="checkbox"></li><li class="share"><input type="checkbox"></li></ul><span class="likes-views">'+ likes + ' Likes</span><p class="altdescription">' + altDescription + '</p>');
		$('.people-carousel ul').append('<a href="profile.html?user='+ username +'"><li><img src="'+ profileimage +'"><span>'+ name +'</span></li></a>');
	});
	$(window).scroll(function() {	
		if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
			$.each(data, function(index, value){
				var name = value.user.name;
				var profileimage = value.user.profile_image.small;
				var imageurl = value.urls.regular;
				var likes = value.likes;
				var altDescription = value.alt_description;
				var ident = value.id;
				var username = value.user.username;
		
				$('.list').append('<div class="all"><img class="thumb" src="'+ profileimage +'"><a href="profile.html?user='+ username +'"><h2>' + name + '</h2></a><a class="'+ ident +'" href="#' + ident + '"><div class="image"><img src="'+ imageurl +'"></div></a><ul class="actions"><li class="like"><input type="checkbox"></li><li class="comment"><input type="checkbox"></li><li class="share"><input type="checkbox"></li></ul><span class="likes-views">'+ likes + ' Likes</span><p class="altdescription">' + altDescription + '</p>');
			});
		}
	});
});
$(document).on("click", '.all a', function(event){
	$('.photodetail .area').append($(this).parent().html());
	$('.photodetail').addClass('showed');
	$('body').css('overflow', 'hidden');
});
$(document).on("click", '.close', function(event){
	$('.photodetail .area').html('');
	$('.photodetail').removeClass('showed');
	$('body').css('overflow', 'auto');
});
function getUrlVars()
{
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	{
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}
var user = getUrlVars()["user"];
$.getJSON('https://api.unsplash.com/users/'+ user +'/photos/?client_id=VZSVVIiR1McDseDmZ_zo50nieFJ8r4JQD9fxdb6iyeA', function(data) {
	$.each(data, function(index, value){
		var name = value.user.name;
		var username = value.user.username;
		var profileimage = value.user.profile_image.small;
		var imageurlthumb = value.urls.thumb;
		var totalfotos = value.user.total_photos;
		$('.name').text(name);
		$('.infoarea img').attr('src', profileimage);
		$('.photosnumbers').text(totalfotos);
		$('.infoarea span').text('@' + username);
		$('.profile').append('<div class="all"><div class="image"><img src="'+ imageurlthumb +'"></div></div>');
	});
});
$(document).on("click", '#backbutton', function(event){
	window.history.back();
});