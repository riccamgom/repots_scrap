import axios from 'axios';
import * as cheerio from 'cheerio';


//const url = 'https://elpais.com/';

export async function elpaisHeadlines(): Promise<string[]> {
    try {
        const response = await axios.get('https://elpais.com/');
        const $ = cheerio.load(response.data);
        const headlines = $('h2.c_t a').get();
        const fiveHeadlines = headlines.slice(0,5).map((element) => {
                return element.children[0].data;
            });
        return fiveHeadlines;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function elmundoHeadlines(): Promise<string[]> {
    try {
        const response = await axios.get('https://www.elmundotoday.com/');
        const $ = cheerio.load(response.data);
        const headlines = $('h3.entry-title td-module-title a').get();
        console.log("🚀 ~ file: scraping.ts:27 ~ elmundoHeadlines ~ headlines:", headlines)
        const fiveHeadlines = headlines.slice(0,5).map((element) => {
                return element.children[0].data;
            });
        return fiveHeadlines;
    } catch (error) {
        console.error(error);
        return [];
    }
}
