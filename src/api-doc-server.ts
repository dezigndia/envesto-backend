const express = require('express');
const path = require('path');
const app = express();
console.log("sfsdfs")
app.use(express.static(path.join(__dirname, '../doc')));
app.listen(3002, () => {
    console.log("API doc running: "+ 3002);
});



// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'doc')));
// app.listen(3002, () => { console.log('api doc is running port 3002') });