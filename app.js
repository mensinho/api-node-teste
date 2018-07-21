const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.json({
    message: 'Fala dev'
  });
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => console.log(`running at: ${port}`));
