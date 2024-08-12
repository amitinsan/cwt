const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

app.use(expressLayouts)
app.use(express.static('build'))
app.set('view engine', 'ejs');
app.set('layout', 'partials/layout-horizontal');

app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})

app.get('/about-us.htm', (req, res) => {
    res.render('pages/about-us.ejs')
})

app.get('/contact-us.htm', (req, res) => {
    res.render('pages/contact-us.ejs')
})
  
app.get('/products.htm', (req, res) => {
    res.render('pages/products.ejs')
})
  
    


app.listen(port, () => {
  console.log(`App Running on port ${port}`)
})


