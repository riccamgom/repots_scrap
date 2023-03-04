import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapHeadlines(url:string, htmltag:string): Promise<string[]> {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const headlines = $(htmltag).get();
        const fiveHeadlines = headlines.slice(0,5).map((element) => {
                return element.children[0].data;
            });
        return fiveHeadlines;
    } catch (error) {
        console.error(error);
        return [];
    }
}