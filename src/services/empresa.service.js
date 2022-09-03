const Repository = require('../repositories/empresa.repository');

module.exports = {
  async addEmpresa(payload) {
    return await Repository.addEmpresa(payload);
  },
  async getEmpresa(id) {
    return await Repository.getEmpresa(id);
  },
  async getEmpresas() {
    return await Repository.getEmpresas();
  },
}
