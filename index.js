const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const charRoutes = require('./routes/char');
app.use('/', charRoutes);

app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
