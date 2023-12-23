const db = require('../models/indexModel');


exports.getCriticsUsers = async () => {
  return await db.criticsUsers.findAll();
};

exports.addCriticsUser = async (idR, idU, comment, noteU) => {
  return await db.criticsUsers.create(
    { idR, idU, comment, noteU }
  );
};

exports.getCriticsUserById = async (idR, idU) => {
  return await db.criticsUsers.findOne(
    { where: { idR, idU } }
  );
};

exports.putCriticsUser = async (idR, idU, comment, noteU) => {
  return await db.criticsUsers.update(
    { comment: comment, noteU: noteU },
    { where: { idR, idU } }
  );
};

exports.deleteCriticsUserById = async (idR, idU) => {
  return await db.criticsUsers.destroy(
    { where: { idR, idU } }
  );
}; 