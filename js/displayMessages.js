$(function() {
	// the tweet messages will be stored in an array
	var messages = [];
	
	// get data from the JSON file
   $.getJSON('./tweetsFromTwitter.json')
   		// called if the file was found
   		.done(function (data) {
   			console.log( "JSON Success!" );
   			// go through each tweet and push the text onto the messages array
   			$.each(data, function(tweetNumber, tweet) {
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