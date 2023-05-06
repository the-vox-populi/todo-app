const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static('assets'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('main')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})