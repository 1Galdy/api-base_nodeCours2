const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinode')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const postRoute = require('./api/routes/postRoute');
const userRoutes = require('./api/routes/userRoute');
const timerRoutes = require('./api/routes/timerRoute');

postRoute(app);
userRoutes(app);
timerRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
