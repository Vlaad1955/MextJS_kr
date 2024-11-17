import {urls} from "@/app/constant/urls";
import {TrandingModel} from "@/app/models/TrandingModel";


export  async function top9 (): Promise<TrandingModel[]> {
    const response = await fetch(`${urls.TrandingMovie}`);
    const data = await response.json();
    return data.results.filter((item) => item.media_type === "movie").slice(0,9);
}