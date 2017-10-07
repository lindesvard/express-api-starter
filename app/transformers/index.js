module.exports = res => (model, payload) => {
  try {
    const transformer = require(`./${model}`);

    if (Array.isArray(payload)) {
      payload = payload.map(transformer);
    } else {
      payload = transformer(payload);
    }
  } catch (e) {
    console.log(e);
  }

  return res.json(payload);
};
