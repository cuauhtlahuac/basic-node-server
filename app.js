const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.send('Hello 🌎!');
});

// Start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });