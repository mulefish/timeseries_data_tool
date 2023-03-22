const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb');
const client = new DynamoDBClient({ region: 'us-east-1' });

async function getAllItemsFromDynamoDBTable(tableName) {
  const params = {
    TableName: tableName,
  };

  let items = [];
  let done = false;
  let startKey;

  while (!done) {
    const command = new ScanCommand(params);
    const result = await client.send(command);

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

(async function() {
  const tableName = 'dynamodbTable';
  const items = await getAllItemsFromDynamoDBTable(tableName);
  console.log(items);
})();
