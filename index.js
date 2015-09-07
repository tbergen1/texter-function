
var accountSid = 'ACbdff4684deb27823865608f57d0c695f';
var authToken = "209353ea553d7f6f1ff9df7db77511d4";
var client = require('twilio')(accountSid, authToken);
var async = require('async');
 
//Keeps track of the state of the system in order to allow for transfer between multiple lambda calls.
var state = {
	recipient: ["+17745516658", "+15084330967", "+17745516658", "+17745516658", "+17745516658", "+17745516658"],
	complete: 0,
	index: 0,
};
var seconds = 0;
//Makes http requests in groups of 5
async.eachLimit(state.recipient, 5, sendText, function(err) {
	console.log("Finished!");
});

//Creates message for Twilio API to send
function sendText(recipient, callback) {
	client.messages.create({
    body: "Yo, here's a test text, bitch!",
    to: recipient,
    from: "+17742937172"
	}, function(err, message) {
    	if (err) {
    		console.log(err.message);
    	}
    	return callback(null);
	});
};

/*if(timing = 45) {
	state.index = 
	state.complete = 
	state.
}*/

var timing = setInterval(timer, 1000);

function timer() {
	seconds++;
	console.log(seconds);
};

setTimeout(function() {
	process.exit();
}, 10000);

