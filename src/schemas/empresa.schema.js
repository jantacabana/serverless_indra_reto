const Joi = require('joi');

const empresaSchema = Joi.object().keys({
  razonSocial: Joi.string().required().min(10).max(100),
  direccion: Joi.string().required().max(500),
  telefono: Joi.string().required().max(12),
  ruc: Joi.string().required().length(11),
});

module.exports.empresaSchema = empresaSchema;