const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('gRPC-web client:');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));