const pool = require("../config/db_pgsql.js");
const queries = require("../queries/queries.js"); // Queries SQL

/**
 * Encontrar clientes por DNI.
 *
 * @function getUserByDNI
 * @param {string} DNI - El DNI del cliente.
 * @return {Promise<string>} Los datos del cliente.
 */
// GET
const getUserByDNI = async (DNI) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getUserByDNI, [DNI]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// Get all users
const getUsers = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getUsers);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

const user = {
  getUserByDNI,
  getUsers,
};

module.exports = user;