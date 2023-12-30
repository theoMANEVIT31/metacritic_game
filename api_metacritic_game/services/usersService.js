const db = require("../models/indexModel");
const { getIdRolesByNom } = require("./rolesService");

exports.getUsers = async () => {
  return await db.users.findAll({
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.addUser = (pseudo, hashedPassword, email) => {
  return db.users.create({ pseudo, hashedPassword, email});
};

exports.getUserById = async (id) => {
  return await db.users.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["hashedPassword"] },
  });
};

exports.putUser = async (id, pseudo, hashedPassword, email) => {
  return await db.users.update(
    { pseudo: pseudo, hashedPassword: hashedPassword, email: email },
    {
      where: {
        id,
      },
    }
  );
};

exports.updateRoleByUserId = async (id, role) => {
  const roleId = await getIdRolesByNom(role);
  return await db.users.update({
    roles: roleId.id
  },
  {
    where: {
      id,
    },
  })
}

exports.deleteUserById = async (id) => {
  return await db.users.destroy({
    where: {
      id,
    },
  });
};
