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

    let sqlText = `INSERT INTO "todo" ("taskname")
                    VALUES ($1);`;
    pool.query(sqlText, [newToDo.name])
        .then(result => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error adding new task', err);
            res.sendStatus(500);
        });
});

// PUT
toDoRouter.put('/:id', (req, res) => {
    const taskId = req.params.id;

    console.log('PUT request', req.params.id);

    let sqlText = `UPDATE "todo"
                    SET "completionstatus" = TRUE
                    WHERE "id" = $1;`;

    const sqlParams = [taskId];

    pool
        .query(sqlText, sqlParams)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('PUT request error', err);
            res.sendStatus(500);
        });
});

// DELETE

module.exports = toDoRouter;