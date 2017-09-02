var endpoint = "https://wind-bow.gomix.me/twitch-api";
var users = "/users/";
var channels = "/channels/";
var streams = "/streams/";

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

for (var i = 0; i < streamers.length; i++) {
	$.ajax({
	  url: endpoint + streams + streamers[i],
	  method: "GET"
	})

	.done(function (data) {
	  console.log(data);
	  /*for (var i = 0; i < streamers.length; i++) {
	  	
	  }*/
	})
	.fail(function (err) {
	  console.log(err);
	});
}