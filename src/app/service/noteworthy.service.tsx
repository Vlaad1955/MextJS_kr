import {urls} from "@/app/constant/urls";
import {TrandingModel} from "@/app/models/TrandingModel";


export  async function NoteworthyService (): Promise<TrandingModel[]> {
    const response = await fetch(`${urls.TopMovie}`);
    const data = await response.json();
    return data.results;
}