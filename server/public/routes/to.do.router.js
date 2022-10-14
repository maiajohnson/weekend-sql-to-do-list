const express = require("express");
const toDoRouter = express.Router();
const pool = require('../modules/pool');

// GET
toDoRouter.get('/', (req, res) => {
    pool.query(`
        SELECT * FROM "todo" ORDER BY "id";    
    `)
        .then((dbRes) => {
            res.send(dbRes.rows);
    })
        .catch((err) => {
            console.log('GET /todo failed', err);
            res.sendStatus(500);
        });
});

// POST


// PUT


// DELETE