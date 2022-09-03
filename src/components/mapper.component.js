const ObjectMapper = require('object-mapper');

module.exports = {
  async mapperList(results, mapper) {
    return results.map((element) => (ObjectMapper(element, mapper)));
  },
  async mapperObject(payload, mapper) {
    return ObjectMapper(payload, mapper);
  },
};
