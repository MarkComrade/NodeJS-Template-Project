const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'suloskaja',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//!SQL Queries
async function selectall() {
    const query = 'SELECT * FROM kaja;';
    const [rows] = await pool.execute(query);
    return rows;
}

async function addFood(foodName, foodPrice, foodTaste, foodExpiration, foodQuantity) {
    const query = 'INSERT INTO kaja (nev, ar, iz, lejarat, mennyiseg) VALUES (?, ?, ?, ?, ?);';
    await pool.execute(query, [foodName, foodPrice, foodTaste, foodExpiration, foodQuantity]);
}
//!Export
module.exports = {
    selectall,
    addFood
};
