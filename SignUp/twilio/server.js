const express = require('express');
const app = express();

const accountSid = 'AC558cabcaaef0fc341a464bfc54beed62';
const authToken = 'a6589b925cc96756b19df0b949f7bc22';
const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'ahoy ',
//         messagingServiceSid: 'MG4c86e468e5dced8fcad0d4ae8723aec6',
//         to: '+8801684206550'
//     })
//     .then(message => console.log(message.sid))
//     .done();



app.listen(3000);


https://api.twilio.com/2010-04-01/Accounts/AC558cabcaaef0fc341a464bfc54beed62/Messages/MM51efc25260a547b7b1a43cb03bcb4cd3/Media.json

https://api.twilio.com/2010-04-01/Accounts/AC558cabcaaef0fc341a464bfc54beed62/Messages/MM378f89c711214f46b8fa7b20dcca7dee/Media.json