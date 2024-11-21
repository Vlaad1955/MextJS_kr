import React from 'react';
import MoviesList from "@/app/components/movieslist/MoviesList";
import {searchMovies} from "@/app/service/movieSearch.service";
import Pagination from "@/app/components/pagination/Pagination";

type Params = {
    name: string;
    id:string;
};
const MoviesPage = async ({ params }: { params: Params }) => {
    const page = parseInt(params.id || "1", 10);
    const name = params.name;
    const { results: movies, total_pages } = await searchMovies(name, page);

    return (
        <div>
            <h2>Знайдені фільми</h2>
            <MoviesList movies={movies}/>
            <Pagination currentPage={page} totalPages={total_pages} Id={params.id} searchName ={name}/>
        </div>
    );
};

export default MoviesPage;