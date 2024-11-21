import {CardModel} from "@/app/models/CardModel";
import {urls} from "@/app/constant/urls";

export async function searchMovies (query, page) : Promise<{ results: CardModel[]; total_pages: number }> {
        const response = await fetch(`${urls.baseURL}/search/movie?api_key=${urls.apiKey}&query=${query}&language=uk-UA&page=${page}`);
        const data = await response.json();
        return {
                results: data.results || [],
                total_pages: data.total_pages,
        };
};