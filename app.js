const express = require('express');
const app = express();
const PORT = 3000;

const getLocationRouter = require('./v1/GET/app');
const postLocationRouter = require('./v1/POST/app');

app.use(express.json());

app.use(getLocationRouter);
app.use(postLocationRouter);

app.listen(PORT, () => {
    console.log(`thunderflash is running on http://localhost:${PORT}`);
});