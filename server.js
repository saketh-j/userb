const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', customerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
