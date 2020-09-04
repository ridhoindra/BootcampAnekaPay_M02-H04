const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

let nama = 'USER'

app.get('/', (req, res) => {
  res.render('latihan',{nama})
})

app.post('/', (req, res) => {
  nama = req.body.nama;
  console.log(nama);
  res.render('latihan',{nama})
})
app.listen(port, () => console.log(`Example app listening on port 3000!`))