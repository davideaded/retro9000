const pool = require("./pool");

async function getAll(table) {
    const query = {
        text: "SELECT * FROM $1",
        values: [table]
    };
    console.log(table);
    const { rows } = await pool.query(query);
    return rows;
}

async function getById(id, table) {
    const query = {
        text: "SELECT * FROM $1 WHERE id = $2",
        values: [table, id]
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
