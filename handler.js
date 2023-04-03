'use strict';

module.exports.hello = async (event, context) => {
    //var obj = JSON.parse(event);
    //payload = obj.issue.html_url;
    let url = process.env.SLACK_URL;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(`{{'text': 'Issue Created: ${event.issue.url}'}}`));
    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        input: event.issue.url,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
