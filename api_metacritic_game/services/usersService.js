const db = require("../models/indexModel")


exports.getUsers = async () => {
  return await db.users.findAll({
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.addUser = (pseudo, hashedPassword, email) => {
  return db.users.create({ pseudo, hashedPassword, email })
}

exports.getUserById = async (idU) => {
  return await db.users.findOne(
    { where: { idU }, attributes: { exclude: ["hashedPassword"] } }
  )
}

exports.putUser = async (idU, pseudo, hashedPassword, email) => {
  return await db.users.update(
    { pseudo: pseudo, hashedPassword: hashedPassword, email: email },
    { where: { idU } }
  )
}

exports.deleteUserById = async (idU) => {
  const hasRelatedCriticsUsers = await db.criticsUsers.findOne(
    { where: { idU }, }
  )
  if (hasRelatedCriticsUsers) {
    await db.criticsUsers.destroy(
      { where: { idU } }
    )
  }
  return await db.users.destroy(
    { where: { idU } }
  )
}
