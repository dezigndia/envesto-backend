const express = require('express');
const path = require('path');
require('custom-env').env('development', './env');
const app = express();
app.use(express.static(path.join(__dirname, '../doc')));
app.listen(process.env.API_DOC_PORT, () => {
    console.log("API doc running: "+ process.env.API_DOC_PORT);
});