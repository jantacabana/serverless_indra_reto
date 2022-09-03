const { getEmpresa, getEmpresas, addEmpresa } = require('./controllers/empresa.controller');
const { getVehicle, getVehicles, getVehicleSchema } = require('./controllers/vehicle.controller');

module.exports =
  {
    getEmpresa: getEmpresa,
    getEmpresas: getEmpresas,
    addEmpresa: addEmpresa,
    getVehicle: getVehicle,
    getVehicles: getVehicles,
  };
