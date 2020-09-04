const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', function (req,res) {
    res.render('Home')
})
app.get('/Penjumlahan', (req,res)=>{
    res.render('Penjumlahan')
})
app.get('/Pengurangan', (req,res)=>{
    res.render('Pengurangan')
})
app.get('/Perkalian', (req,res)=>{
    res.render('Perkalian')
})
app.get('/Pembagian', (req,res)=>{
    res.render('Pembagian')
})

app.post('/Penjumlahan', function (req, res) {
    
    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Angka Pertama Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Angka Kedua Harus Diisi Angka');
        check = 1;
    }
    // console.log(check);
    if (check == 0) {
        var hasil = no1 + no2;
        return res.send('hasil : '+ hasil);
        // console.log(hasil);
    } else {
        console.error("Error");
        res.status(400).send('Format Angka Salah')
        
    }
});

app.post('/Pengurangan', function (req, res) {

    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (check == 0) {
        var result = no1 - no2;
        res.send('Hasilnya : ' + result);
    } else {
        console.error("Error");
        // throw new Error('Format Angka Anda Salah!!!')
        res.status(400).send('Format Angka Salah')
    }
});

app.post('/Perkalian', function (req, res) {

    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (check == 0) {
        var result = no1 * no2;
        res.send('Hasilnya: ' + result);
    } else {
        console.error("Error");
        // throw new Error('Format Angka Anda Salah!!!')
        res.status(400).send('Format Angka Salah')
    }
});

app.post('/Pembagian', function (req, res) {

    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (check == 0) {
        if (no2 != 0) {
            var result = no1 / no2;
            res.send('Hasilnya: ' + result);
        } else {
            console.error("Error Pembagi");
            // throw new Error('Format Angka Anda Salah!!!')
            res.status(400).send('Pembagi Tidak Boleh 0')
        }
    } else {
        console.error("Error");
        // throw new Error('Format Angka Anda Salah!!!')
        res.status(400).send('Format Angka Salah')
    }
});


app.listen(port, () => console.log(`Example app listening on port 3000!`))