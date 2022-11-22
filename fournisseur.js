const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyparser.json());
//database
const db = mysql.createConnection({
    host: 'localhostm',
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
app.get('/fournisseur', (req, res) => {
    let qr = 'select * from fournisseur';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all fournisseur data',
                data: result
            })
        }
    });

});

//get single data
app.get('/fournisseur/:id_fournisseur', (req, res) => {
    let gID = req.params.id_fournisseur;

    let qr = `select * from fournisseur where id_fournisseur = ${gID}`;

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
app.post('/fournisseur', (req, res) => {
    console.log(req.body, 'createdata');


    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let mail = req.body.mail;
    let phone = req.body.phone;
    let adresse = req.body.adresse;

    let qr = `insert into fournisseur(nom,prenom,mail,phone,adresse)
              values('${nom}','${prenom}','${mail}','${phone}','${adresse}')`;
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
app.put('/fournisseur/:id_fournisseur', (req, res) => {

    console.log(req.body, 'updatedata');
    let qID = req.params.id_fournisseur;
    let nom_livre = req.body.nom_user;

    let qr = `update fournisseur set nom = '${nom}' where id_fournisseur = '${qID}'`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({ message: 'data updated' });
    });

});
//delete single data
app.delete('/fournisseur/:id_fournisseur', (req, res) => {
    let qID = req.params.id_fournisseur;
    let qr = `delete  from fournisseur where id_fournisseur = '${qID}'`;
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