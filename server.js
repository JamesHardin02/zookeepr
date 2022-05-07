const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array including nested arrays/objs into json
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data in js obj
app.use(express.json());
// middleware for files that call dependencies load the public folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});