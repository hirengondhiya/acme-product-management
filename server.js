const express = require('express');
const path = require('path');
const app = express();
// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }

// app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));

app.get('/api/products', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/api/products/products.json'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 8080, function() {
    console.log('Started running the app on port:', process.env.PORT || 8080);
});
