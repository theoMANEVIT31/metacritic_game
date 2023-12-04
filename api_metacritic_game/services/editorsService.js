const db = require("../models/indexModel");

exports.getEditors = async () => {
  return await db.editors.findAll();
};

exports.addEditor = (pseudo, hashedPassword, email) => {
  return db.editors.create({pseudo, hashedPassword, email});
};

exports.getEditorById = async (idE) => {
  return await db.editors.findOne({
    where: {
      idE,
    },
  });
};

exports.putEditor = async (pseudo, hashedPassword, email) => {
  return await db.editors.update(
    { pseudo: pseudo, hashedPassword: hashedPassword, email: email},
    {
      where: {
        idE,
      },
    }
  );
};

exports.deleteEditorById = async (idE) => {
  return await db.editors.destroy({
    where: {
      idE,
    },
  });
};
