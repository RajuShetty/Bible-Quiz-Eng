var FCM = require('fcm-node');
// Replace these with your own values.
var apiKey = "AAAAhbQZquE:APA91bEYaKsEa4fGKeQWNQhQRzUDIIRNs7P3I9SJewFYkHFJ4nQKMxYE_JFGWbunDCugyTF-MAs6rbiw4w86-dZ2-ri84f4rodfcSXXdWbN5DNCt2o4Ep_1bJUz5QwIgSYb6LO87f_Sk";
var deviceID = "my device id";
var fcm = new FCM(apiKey);

var message = {
    to: deviceID,
    "data": {
        "title": 'Force Start',
        "message": 'This notification should restart the app',
        "force-start": '1',
	
    }
};

fcm.send(message, function(err, response){
  if (err) {
    console.log(err);
    console.log("Something has gone wrong!");
  } else {
    console.log("Successfully sent with response: ", response);
  }
});


/*
// Load modules

var gcm = require('node-gcm');

// Replace these with your own values.
var apiKey = "AAAA9ljuQ0Y:APA91bHhPYlRhNBazmHO7S8cdF_QN3woEVSG5L5qLUJEBgwF1F3vwW3GY5_uy2DuxmJILmge29AY7NI5BfFC-kbPfTO6RejbJ8P1BIjG0W8emHyB7vhsDwjqLZPfqIVdp03UNaEMG5FF";
var deviceID = "Device's Registration ID";

var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', 'Hello, World');
message.addData('body', 'This is a notification that will be displayed ASAP.');
//message.addData('content-available', '1');
message.addData('actions', [
  { "icon": "accept", "title": "Accept", "callback": "app.accept"},
  { "icon": "reject", "title": "Reject", "callback": "app.reject"},
]);


service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
}); */
