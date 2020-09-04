const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')

app.engine('rik', function (filePath, options, callback) { // define the template engine
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(err)
        // this is an extremely simple template engine
        console.log('options')
        console.log(options)
        var rendered = content.toString()
            .replace('#error#',   options.error )
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
        
        // console.log(rendered);
        return callback(null, rendered)
    })
 })
 app.set('view engine', 'rik') // register the template engine
 
 app.get('/', (req, res) => {
   res.render('home')
 })

app.listen(port, () => console.log(`Example app listening on port 3000!`))