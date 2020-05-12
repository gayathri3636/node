const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

connectDB();
app.use(
  express.json({
    extended: false,
  })
);

const VendorRoute = require('./Api/Vendor');
const EmployeeRoute = require('./Api/Employee');
const UserRoute = require('./Api/User');
app.use('/Vendor', VendorRoute);
app.use('/Employee', EmployeeRoute);
app.use('/User', UserRoute);

const port = process.env.port || 5000;
app.listen(port, () => console.log('Server started'));
