const {create, get, getItem, addDynamoParams, getDynamoParams} = require('../datasources/dynamo.datasource');

function addEmpresa(payload) {
  const dynamoParams = addDynamoParams(payload, process.env.DYNAMODB_TABLE);
  return create(dynamoParams);
}

function getEmpresa(id) {
  const dynamoParams = getDynamoParams(process.env.DYNAMODB_TABLE);
  dynamoParams.Key = {
    id: id
  };
  return getItem(dynamoParams);
}

function getEmpresas() {
  const dynamoParams = getDynamoParams(process.env.DYNAMODB_TABLE);
  return get(dynamoParams);
}

module.exports = {
  addEmpresa,
  getEmpresa,
  getEmpresas
};

