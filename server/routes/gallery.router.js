const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE



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