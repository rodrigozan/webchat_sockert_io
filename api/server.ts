import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3700, () => {
    console.log('Server is listening on port 3000');
});
