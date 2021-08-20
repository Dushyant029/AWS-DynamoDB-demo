var AWS = require("aws-sdk");
let awsConfig = {
    "region": "eu-west-2",
    "endpoint": "http://dynamodb.eu-west-2.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "Demo-Proj",
        Key: {
            "email_id": "test@gmail.com"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("Demo-Proj::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("Demo-Proj::delete::success");
        }
    });
}

remove();