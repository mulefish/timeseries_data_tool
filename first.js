const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();


const params = {
  TableName: 'PEPS-TS-DataStream',
  Limit:500
};




docClient.scan(params, function(err, data) {
  if (err) {
    console.log('Error scanning table:', err);
  } else {
    console.log('Items in table:', data.Items);
  }
});

