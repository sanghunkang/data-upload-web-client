const request = require('request');

exports.handler = function(event, context, callback) {
  // let apiEndpoint = 'http://184.172.214.162:30004';
  let url = 'http://localhost:7004/auth/signup'

  console.log(event);
  request.post({
    url: url, 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': event.headers.authorization,
    },
    body: event.body,
  }, (err, resToReceive, body) => {
    if (err) { return console.log(err); }
  
    if (resToReceive.statusCode === 200) {
      callback(null, {
        statusCode: '200',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
      });
    } else {
      callback(resToReceive.statusCode); 
    }
  });

}