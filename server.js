const express = require('express');
const dotenv = require('dotenv');
const contactRouter = require('./routes/contactRoutes');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

const app = express();
dotenv.config();
connectDb();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})