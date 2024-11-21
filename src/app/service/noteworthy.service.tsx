import {urls} from "@/app/constant/urls";
import {CardModel} from "@/app/models/CardModel";


export  async function NoteworthyService (page): Promise<{ results: CardModel[]; total_pages: number
}> {
    const response = await fetch(`${urls.TopMovie}&page=${page}`);
    const data = await response.json();
    return {
        results: data.results,
        total_pages: data.total_pages,
    };
}