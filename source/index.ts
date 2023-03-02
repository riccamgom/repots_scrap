import express from 'express';
import { elpaisHeadlines } from './services/scraping';
import { apiResponseUtil } from './res/apiresponse';

const app = express();
const PORT = 3123;

app.use(express.json());

app.get('/test', (_req, res) => {
    console.log('Testing---');
    res.send('test');
});

app.get('/scrap', async (_req, res) => {
    console.log('Scraping---');
    try {
        const headlines = await elpaisHeadlines();
        res.status(200).json(apiResponseUtil.success(headlines));
    } catch (error) {
        console.error(error);
        res.status(500).json(apiResponseUtil.error('Internal server Error'));
    }
});

app.listen(PORT, () => {
    console.log('Running on port ' + PORT)
})