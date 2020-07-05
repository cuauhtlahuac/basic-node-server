const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.send('Hello 🌎!');
});

// Start the server
const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
  
    console.log(`App listening at http://${host}:${port}`);
  });
