import {urls} from "@/app/constant/urls";


export async function GetGenreID (){
    const genresResponse = await fetch(`${urls.baseURL}/genre/movie/list?api_key=${urls.apiKey}&language=uk-UA`);
    return genresResponse.json();
}