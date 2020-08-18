import { articles_url, country_code, api_key } from '../config/rest-config';

export async function getArticles(countryCode:string) {
    try {
        let articles = await fetch(`${articles_url}?country=${countryCode}`,
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