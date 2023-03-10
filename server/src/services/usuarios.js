import {usersDao} from '../containers/Daos/index.js';

const getAll = async () => {
  const users = await usersDao.getAll();
  return users;
};

const getUser = async (id) => {
  const user = await usersDao.getById(id);
  return user;
};

const create = async (user) => {
  const newUser = await usersDao.create(user);
  return newUser;
};

const deleteById = async (id) => {
  const user = await usersDao.deleteById(id);
  return user;
};

export { getUser, getAll, create, deleteById };
