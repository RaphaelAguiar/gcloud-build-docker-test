const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/',(req,res) => {
  res.status(200).send('Alive 1.1')
})

app.listen(port);