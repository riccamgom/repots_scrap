import express from 'express';
import { scraping } from './controllers/scraping.controller';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/test', (_req, res) => {
    console.log('Testing---');
    res.send('test');
});

app.get('/scrap', async (_req, res) => {
    console.log('Scraping---');
    scraping(_req, res);
});

app.listen(PORT, () => {
    console.log('Running on port ' + PORT)
})