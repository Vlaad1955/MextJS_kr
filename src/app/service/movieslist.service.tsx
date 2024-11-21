import {urls} from "@/app/constant/urls";
import {CardModel} from "@/app/models/CardModel";

export async function getMovies(page: number): Promise<{ results: CardModel[]; total_pages: number }> {
    const response = await fetch(`${urls.baseURL}/discover/movie?api_key=${urls.apiKey}&language=uk-UA&page=${page}`);
    const data = await response.json();
    return {
        results: data.results,
        total_pages: data.total_pages,
    };
}