const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { Router } = require('express');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simpledb',
    port: 3306
});
//check connection

db.connect(err => {
    if (err) {
        console.log(err, 'dberr');
    }
    console.log('database connected..');
})

//get all data
app.get('/categorie', (req, res) => {
    let qr = 'select * from categorie';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all categorie data',
                data: result
            })
        }
    });

});

//get single data
app.get('/categorie/:id_categorie', (req, res) => {
    let gID = req.params.id_categorie;

    let qr = `select * from categorie where id_categorie = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        }
        else {
            res.send({
                message: 'data not found'
            });
        }
    });
})

//create data
app.post('/categorie', (req, res) => {
    console.log(req.body, 'createdata');

    let libelle = req.body.libelle;

    let qr = `insert into categorie(libelle)
              values('${libelle}')`;
    console.log(qr, 'qr')
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, 'result')
        res.send({
            message: 'data insered',
        });
    });

});
//update data
app.put('/categorie/:id_categorie', (req, res) => {

    console.log(req.body, 'updatedata');
    let qID = req.params.id_categorie;
    let libelle = req.body.libelle;

    let qr = `update categorie set libelle = '${libelle}' where id_categorie = '${qID}'`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({ message: 'data updated' });
    });

});
//delete single data
app.delete('/categorie/:id_categorie', (req, res) => {
    let qID = req.params.id_categorie;
    let qr = `delete from categorie where id_categorie = '${qID}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data deleted'
        })
    });
});





app.listen(3000, () => {
    console.log('server running');
})