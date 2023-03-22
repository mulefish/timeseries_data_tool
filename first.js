const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();


const params = {
  TableName: 'PEPS-TS-DataStream',
};

docClient.scan(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.Items);
  }
});
