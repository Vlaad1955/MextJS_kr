import {urls} from "@/app/constant/urls";
import {AllinfoModel} from "@/app/models/AllinfoModel";


export  async function getToId (movieId): Promise<AllinfoModel[]> {
    const response = await fetch(`${urls.baseURL}/movie/${movieId}?api_key=${urls.apiKey}&language=uk-UA`);
    return response.json();
}