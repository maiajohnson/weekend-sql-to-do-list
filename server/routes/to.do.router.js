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
toDoRouter.post('/', (req, res) => {
    let newToDo = req.body;

    let sqlText = `INSERT INTO "todo" ("task_name")
                    VALUES $1;`;
    pool.query(sqlText, [newToDo])
        .then(result => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error adding new task', err);
            res.sendStatus(500);
        });
});

// PUT


// DELETE

module.exports = toDoRouter;