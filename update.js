var AWS = require("aws-sdk");
let awsConfig = {
    "region": "eu-west-2",
    "endpoint": "http://dynamodb.eu-west-2.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "Demo-Proj",
        Key: { "email_id": "test-1@gmail.com" },
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("Demo-Proj::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("Demo-Proj::update::success "+JSON.stringify(data) );
        }
    });
}

modify();