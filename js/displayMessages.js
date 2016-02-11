$(function() {
	// store the times, pictures, names, and messages in arrays
	var times = [];
	var pictures = [];
	var names = [];
	var messages = [];
	
	// get data from the JSON file
   $.getJSON('./tweetsFromTwitter.json')
   		// called if the file was found
   		.done(function (data) {
   			console.log( "JSON Success!" );
   			// go through each tweet and push the text onto the messages array
   			$.each(data, function(tweetNumber, tweet) {
   				times.push(tweet.created_at);
   				pictures.push(tweet.user.profile_image_url);
   				names.push(tweet.user.name);
   				messages.push(tweet.text);
   			})
   		})
   		// called if the file was not found
   		.fail(function( jqxhr, textStatus, error ) {
   			// print the error
			var err = textStatus + ", " + error;
			console.log( "JSON Request Failed: " + err );
		});
});