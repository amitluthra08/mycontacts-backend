const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})