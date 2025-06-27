const pool = require("./pool");

const validTables = ["platforms", "games"];

async function getAll(table) {
    if (!validTables.includes(table)) {
        throw new Error("Invalid table");
    }
    const query = {
        text: `SELECT * FROM ${table}`,
        values: []
    };
    const { rows } = await pool.query(query);
    return rows;
}

async function getById(id, table) {
    if (!validTables.includes(table)) {
        throw new Error("Invalid table");
    }
    const query = {
        text: `SELECT * FROM ${table} WHERE id = $1`,
        values: [id]
    };
    const { rows } = await pool.query(query);
    return rows;
}

async function create() {
    return "to do";
}

async function update() {
    return "to do";
}

async function del() {
    return "to do";
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
};
