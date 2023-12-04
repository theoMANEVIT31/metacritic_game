const db = require("../models/indexModel");

exports.getCriticsEditors = async () => {
  return await db.criticsEditors.findAll();
};

exports.addCriticsEditor = (evaluation, noteE, date, idE) => {
  return db.criticsEditors.create({evaluation, noteE, date, idE });
};

exports.getCriticsEditorById = async (idC) => {
  return await db.criticsEditors.findOne({
    where: {
      idC,
    },
  });
};

exports.putCriticsEditor = async (evaluation, noteE, date, idE) => {
  return await db.criticsEditors.update(
    { evaluation: evaluation, noteE: noteE,date: date, idE: idE },
    {
      where: {
        idC,
      },
    }
  );
};

exports.deleteCriticsEditorById = async (idC) => {
  return await db.criticsEditors.destroy({
      where: {
          idC
      }
  });
}

