const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

//POST Route
router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = 
        `INSERT INTO gallery ("path", "description", "likes")
        VALUES ($1, $2, $3);`

    pool.query(sqlText, [item.path, item.description, item.likes])
    .then((result) => {
      console.log(`Added item to the database`, item);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});


// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const sqlText = `
        UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE id =$1;
        `
    const sqlParams =  [req.params.id]
    pool.query(sqlText, sqlParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log("error in server PUT:", err);
    });
});
     // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id;` 
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
  
}); // END GET Route

module.exports = router;