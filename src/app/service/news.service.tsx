import {urls} from "@/app/constant/urls";
import {NewsModel} from "@/app/models/NewsModel";


export async function newsService(): Promise<NewsModel> {
    const response = await fetch(`${urls.latestMovie}`);
    return await response.json();
}