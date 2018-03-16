module.exports = knex => async (id) => {
  try {
    return await knex('users').where('id', id);
  } catch (error) {
    return error;
  }
};

