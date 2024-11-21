import {CardModel} from "@/app/models/CardModel";
import {urls} from "@/app/constant/urls";


export async function getGenres (genre, page) : Promise<{ results: CardModel[]; total_pages: number }> {
    const response = await fetch(
        `${urls.baseURL}/discover/movie?api_key=${urls.apiKey}&with_genres=${genre}&language=uk-UA&page=${page}`
    );
    const data = await response.json();
    return {
        results: data.results,
        total_pages: data.total_pages,
    };
}