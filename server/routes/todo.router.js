const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const dbQuery = `SELECT * FROM "todo" ORDER BY "priority" DESC, "complete" DESC;`
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
router.post('/', (req, res) => {
    const note = [req.body.note, req.body.priority];
    const queryText = `INSERT INTO "todo" ("note", "priority") VALUES ($1, $2);`
    pool
    .query(queryText, note)
    .then((result) => {
        console.log('Added note to database', note);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error('Note append failed', error);
        res.sendStatus(500)
    })
})
// PUT
router.put('/:id', (req, res) => {
    const updateNote = req.params.id;
    const queryText = `UPDATE "todo" SET "complete" = NOT "complete" WHERE "id" = $1;`;
    pool
    .query(queryText, [updateNote])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    const removeNote = req.params.id;
    const queryText = `DELETE FROM "todo" WHERE "id" = $1;`
    pool
    .query(queryText, [removeNote])
    .then((result) => {
        console.log('Note Deleted');
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error(error);
        res.sendStatus(500);
    })
})

module.exports = router;
