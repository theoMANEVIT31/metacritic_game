const db = require("../models/indexModel");


exports.getEditors = async () => {
  return await db.editors.findAll(
    { attributes: { exclude: ["hashedPassword"] } }
  );
};

exports.addEditor = async (pseudo, hashedPassword, email) => {
  return await db.editors.create(
    { pseudo, hashedPassword, email }
  );
};

exports.getEditorById = async (idE) => {
  return await db.editors.findOne(
    { where: { idE }, attributes: { exclude: ["hashedPassword"] }, }
  );
};

exports.putEditor = async (idE, pseudo, email, hashedPassword) => {
  return await db.editors.update(
    { pseudo: pseudo, email: email, hashedPassword: hashedPassword },
    { where: { idE } }
  );
};

exports.deleteEditorById = async (idE) => {
  return await db.editors.destroy({
    where: { idE }
  });
};
