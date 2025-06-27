const pool = require("./pool");
const asyncHandler = require("express-async-handler");

const validTables = ["platforms", "games"];

const getAll = asyncHandler(async (table) => {
    if (!validTables.includes(table)) {
        throw new Error("Can't access database!");
    }
    const query = {
        text: `SELECT * FROM ${table}`,
        values: []
    };
    const { rows } = await pool.query(query);
    return rows;
});

async function getById(id, table) {
    if (!validTables.includes(table)) {
        throw new Error("Can't access database!");
    }
    const tableIdCol = table.slice(0, -1) + "_id";
    const query = {
        text: `SELECT * FROM ${table} WHERE ${tableIdCol} = $1`,
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
