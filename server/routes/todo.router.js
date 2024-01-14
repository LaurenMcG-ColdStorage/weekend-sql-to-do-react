const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const dbQuery = `SELECT * FROM "todo" ORDER BY "priority" DESC;`
    pool
    .query((dbQuery))
    .then((result) => {
        console.log('Successfully queried DB:');
        res.send(result.rows);
    })
    .catch((error) => {
        console.error("Can't retrieve data: ", error);
        res.sendStatus(500)
    })
})


// POST

// PUT

// DELETE

module.exports = router;
