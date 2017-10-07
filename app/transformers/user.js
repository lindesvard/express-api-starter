module.exports = model => ({
  id: model.id,
  fullName: `${model.firstName} ${model.lastName}`,
  email: model.email,
  createdAt: model.createdAt,
});
