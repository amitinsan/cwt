const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const app = express()
const port = 3000

app.get('/*', (req, res) => {
    console.log(`Request URL: ${req.url}`); // Log request URL
    // Your existing code...
  });
  
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('layout', 'partials/layout-horizontal');

app.get('/', (req, res) => {
    res.render('./pages/index.ejs')
})

app.get('/test', (req, res) => {
    res.render('./pages/index.ejs')
})


app.get('/about-us.htm', (req, res) => {
    res.render('./pages/about-us.ejs')
})

app.get('/contact-us.htm', (req, res) => {
    res.render('./pages/contact-us.ejs')
})
  
app.get('/products.htm', (req, res) => {
    res.render('./pages/products.ejs')
})
  
app.get('/*', (req, res) => {
    const requestedPath = req.path;
  
    // Check if the requested path ends with .htm
    if (requestedPath.endsWith('.htm')) {
      // Serve the .htm file if it exists in the public directory
      res.sendFile(path.join(__dirname, 'public', requestedPath), err => {
        if (err) {
          res.status(404).send('File not found');
        }
      });
    } else {
      // Serve a default file or handle other routes
      res.sendFile(path.join(__dirname, 'public', 'index.html'), err => {
        if (err) {
          res.status(404).send('File not found');
        }
      });
    }
  });

  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!!!!')
  })

app.listen(port, () => {
  console.log(`App Running on port ${port}`)
})

module.exports = app;
