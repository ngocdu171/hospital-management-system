import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import UserRoute from './routes/UserRoute.js';

const app = express();

// app.use(bodyParser.json({limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({limit: "30mb", extended: false}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://BrotherD:conmemay7@cluster0.jabiy.mongodb.net/db_HopitalSystemManagement?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

app.use('/user', UserRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Hospital System Management!');
});

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false })
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((err) => console.log(err));