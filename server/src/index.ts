import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();
const port = 8000;

app.use(cors());

app.get('/ping', (_req, res) => {
    res.send({ fine: true });
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));