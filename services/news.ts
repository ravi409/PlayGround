import { articles_url, api_key, sources_url } from '../config/rest-config';

export async function getArticles(countryCode:string='') {
    try {
        let params =(countryCode != '' ? '&country='+ countryCode: '');

        let articles = await fetch(`${articles_url}?language=en${params}`,
            {
                headers: {
                    'X-API-KEY': api_key
                }
            });
        let result = await articles.json();

        return result.articles;

    } catch (error) {
        throw error;
    }
}

export async function getSources() {
    try {
        let sources = await fetch(sources_url,
            {
                headers: {
                    'X-API-KEY': api_key
                }
            });
        let result = await sources.json();

        return result.sources;
    } catch (error) {
        throw error;
    }
}