import {CardModel} from "@/app/models/CardModel";
import {urls} from "@/app/constant/urls";

export const searchMovies = async (query: string): Promise<CardModel[]> => {
        const response = await fetch(`${urls.baseURL}/search/movie?api_key=${urls.apiKey}&query=${query}&language=uk-UA`);
        const data = await response.json();
        return data.results || [];
};