var AWS = require("aws-sdk");
let awsConfig = {
    "region": "eu-west-2",
    "endpoint": "http://dynamodb.eu-west-2.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "email_id": "test-1@gmail.com", "created_by": "clientUser", "created_on": new Date().toString(),
        "updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
    };
    var params = {
        TableName: "Demo-Proj",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("Demo-Proj::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("Demo-Proj::save::success" );                      
        }
    });
}

save();