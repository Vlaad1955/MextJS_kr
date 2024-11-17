import {urls} from "@/app/constant/urls";
import {NewsModel} from "@/app/models/NewsModel";


export async function newsService(): Promise<NewsModel[]> {
    const response = await fetch(`${urls.latestMovie}`);
    const data = await response.json();
    return data;
}