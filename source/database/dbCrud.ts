import { appDataSource } from './dbconf';
import { Headline } from './models/headline';

export async function storeDB (headlinesArray:string[], urlOrigin:string ) {
    for (const el of headlinesArray) {
        try {
            //Sometime the headline has other structure and returns NULL
            if (el != null) { 
                const newheadline = new Headline();
                newheadline.urlOrigin = urlOrigin;
                newheadline.headline = el;
                newheadline.date = new Date();
                await appDataSource.manager.save(newheadline);
            }
        }catch(error){
            console.log(error);
        }
    }
}

export async function readDB(): Promise<Headline[]> {
    try {
        const heads = await appDataSource.getRepository(Headline).find();
        return heads;
    } catch (error) {
        console.log(error);
        return [];
    }
}