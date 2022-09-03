const RestClient = require('../datasources/rest.datasource');

module.exports = {
  async getVehicles() {
    return await RestClient.get(process.env.API_ENDPOINT + 'vehicles');
  },
  async getVehicle(id) {
    return await RestClient.get(process.env.API_ENDPOINT + 'vehicles/' + id);
  },
  async getVehicleSchema() {
    return await RestClient.get(process.env.API_ENDPOINT + 'vehicles/schema');
  },
};
