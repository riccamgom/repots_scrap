import { storeDB } from '../database/dbCrud';
import { scrapHeadlines } from '../lib/scrapingFunctions';

export async function scrapandStore () :Promise<string[]>{
    const elMundo = await scrapHeadlines('https://www.elmundotoday.com/', 'h3.entry-title a')
    storeDB(elMundo, 'https://www.elmundotoday.com/' );
    const elPais = await scrapHeadlines('https://elpais.com/', 'h2.c_t a')
    storeDB(elPais, 'https://elpais.com/' );
    return [...elMundo, ...elPais];
}
