const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(' Iam the Best DevOps Engineer in the world and no one can deny it'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
