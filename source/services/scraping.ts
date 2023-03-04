import axios from 'axios';
import * as cheerio from 'cheerio';
import { appDataSource } from '../database/dbconf';
import { Headline } from '../database/models/headline';

async function scrapHeadlines(url:string, htmltag:string): Promise<string[]> {
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

async function storeDB (headlinesArray:string[], urlOrigin:string ) {
    for (const el of headlinesArray) {
        //Sometime the headline has other structure and returns NULL
        if (el != null) { 
            const newheadline = new Headline();
            newheadline.urlOrigin = urlOrigin;
            newheadline.headline = el;
            newheadline.date = new Date();
            await appDataSource.manager.save(newheadline);
        }
    }
    readDB ();
}

async function readDB (){
    const headline = await appDataSource.getRepository(Headline);
    const heads = await headline.find();
    console.log('Headlines encontrados:', heads);
}


export async function scrapandStore () :Promise<string[]>{
    const elMundo = await scrapHeadlines('https://www.elmundotoday.com/', 'h3.entry-title a')
    storeDB(elMundo, 'https://www.elmundotoday.com/' );
    const elPais = await scrapHeadlines('https://elpais.com/', 'h2.c_t a')
    storeDB(elPais, 'https://elpais.com/' );
    return [...elMundo, ...elPais];
}