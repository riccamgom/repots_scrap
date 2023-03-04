import { scrapandStore } from '../services/scraping.service';
import { apiResponseUtil } from '../res/apiresponse';

export async function scraping (_req:any, res:any){
    try {
        const headlines = await scrapandStore();
        res.status(200).json(apiResponseUtil.success(headlines));
    } catch (error) {
        console.error(error);
        res.status(500).json(apiResponseUtil.error('Internal server Error'));
    }
}