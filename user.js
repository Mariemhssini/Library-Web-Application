const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyparser.json());
const { Validator } = require('node-input-validator');
var session = require('express-session');

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
app.get('/user', (req, res) => {
    let qr = 'select * from users';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all users data',
                data: result
            })
        }
    });

});

//post data
app.post('/user', (req, res) => {
    console.log(req.body, 'createdata');
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;
    let adress = req.body.adress;

    let qr = `insert into users(firstname,lastname,email,password,phone,adress)
              values('${firstname}','${lastname}','${email}','${password}','${phone}','${adress}')`;
    console.log(qr, 'qr')
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, 'result')
        res.send({
            message: 'data insered',
        });
    });
});





exports.login = async (req, res) => {
    const v = new Validator(req.body, {
        email: 'required|email',
        password: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        return res.status(422).send(v.errors);
    }

    try {
        let userData = await user.findOne({ email: req.body.email });
        if (userData) {

            if (bcrypt.compareSync(req.body.password, userData.password)) {

                let jwt_secret = process.env.JWT_SECRET || 'mysecret';
                let token = jwt.sign({
                    data: userData
                }, jwt_secret, { expiresIn: '12h' });

                return res.status(200).send({
                    message: 'Login successfull',
                    data: userData,
                    token: token
                });


            } else {
                return res.status(400).send({
                    message: 'Incorrect credentials',
                    data: {}
                });
            }


        } else {
            return res.status(400).send({
                message: 'User is not registered',
                data: {}
            });
        }
    } catch (err) {
        return res.status(400).send({
            message: err.message,
            data: err
        });
    }

}





app.listen(3000, () => {
    console.log('server running');
})