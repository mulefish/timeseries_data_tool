const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();


async function getAllItemsFromDynamoDBTable(tableName, limit=10) {
    const params = {
      TableName: tableName,
      Limit:limit
    };
    let items = [];
    let done = false;
    let startKey;
  
    while (!done) {
      const result = await docClient.scan(params).promise();
  
      items = items.concat(result.Items);
      startKey = result.LastEvaluatedKey;
  
      if (!startKey) {
        done = true;
      } else {
        params.ExclusiveStartKey = startKey;
      }
    }
  
    return items;
  }


try {
    module.exports = {
        getAllItemsFromDynamoDBTable
    }
} catch (ignore) {
    console.log("OH NO!")
    console.log(ignore)
}
