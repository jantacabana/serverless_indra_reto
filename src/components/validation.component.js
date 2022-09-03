const messages = require('./validation.message');

module.exports = {
  async validate(payload, schema) {
    const validation = await schema.validate(payload, {
      allowUnknown: false,
      abortEarly: false,
      convert: false,
      errors: { language: 'spanish' },
      messages: messages,
    });

    return validation;
  },
};
