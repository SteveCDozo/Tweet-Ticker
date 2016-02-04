$(function() {
	// the tweet messages will be stored in an array
	var messages = [];

   $.getJSON('./tweetsFromTwitter.json')
   		.done(function (data) {
   			console.log( "Success!" );
   		})
   		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
});