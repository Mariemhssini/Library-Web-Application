const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

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
app.get('/livre', (req, res) => {
    let qr = 'select * from livre';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all livre data',
                data: result
            })
        }
    });

});

//get single data
app.get('/livre/:id_livre', (req, res) => {
    let gID = req.params.id_livre;

    let qr = `select * from livre where id_livre = ${gID}`;

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
app.post('/livre', (req, res) => {
    console.log(req.body, 'createdata');

    let nom_livre = req.body.nom_livre;
    let nom_ecrivain = req.body.nom_ecrivain;
    let prix = req.body.prix;
    let Description = req.body.Description;
    let Disponibilite = req.body.Disponibilite;
    let Langue = req.body.Langue;
    let type = req.body.type;
    let Categorie = req.body.Categorie;
    let QTE = req.body.QTE;



    let qr = `insert into livre(nom_livre,nom_ecrivain,prix,Description,Disponibilite,Langue,type,Categorie,QTE)
              values('${nom_livre}','${nom_ecrivain}','${prix}','${Description}','${Disponibilite}','${Langue}','${type}','${Categorie}','${QTE}')`;
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
app.put('/livre/:id_livre', (req, res) => {

    console.log(req.body, 'updatedata');
    let qID = req.params.id_livre;
    let nom_livre = req.body.nom_livre;

    let qr = `update livre set nom_livre = '${nom_livre}' where id_livre = '${qID}'`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({ message: 'data updated' });
    });

});
//delete single data
app.delete('/livre/:id_livre', (req, res) => {
    let qID = req.params.id_livre;
    let qr = `delete from livre where id_livre = '${qID}'`;
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