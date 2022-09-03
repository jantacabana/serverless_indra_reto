const { success, response } = require('../components/response.component');
const Service = require('../services/vehicle.service');
module.exports = {
  async getVehicles(event, context) {
    const result = await Service.getVehicles();
    return success(result);
  },
  async getVehicle(event, context) {
    const result = await Service.getVehicle(event.pathParameters.id);
    if (result == null) {
      return response('vehículo no encontrado', 404);
    }
    return success(result);
  },
}