
module.exports = {

  async errorValidation(error) {
    const messagesError = [];
    error.details.forEach((value) => {
      messagesError.push(value.message);
    });
    console.error(error);
    const result = JSON.stringify(
      {
        payload: {
          message: "Error de validación",
          details: messagesError
        }
      }, null, 2);

    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: result
    };
  },

  async success(data) {
    const result = JSON.stringify({
      payload: {
        data
      }
    }, null, 2);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: result
    };
  },

  async response(data, status) {
    const result = JSON.stringify({
      payload: {
        data
      }
    }, null, 2);

    return {
      statusCode: status,
      headers: { 'Content-Type': 'application/json' },
      body: result
    };
  },
}
