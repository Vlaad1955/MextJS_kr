import React from 'react';
import MoviesList from "@/app/components/movieslist/MoviesList";
import { searchMovies } from "@/app/service/movieSearch.service";
import Pagination from "@/app/components/pagination/Pagination";

type Params = {
    name: string;
    id: string;
};

const MoviesPage = async ({ params }: { params: Promise<Params> }) => {

    const resolvedParams = await params;
    const page = parseInt(resolvedParams.id || "1", 10);
    const name = resolvedParams.name;


    const { results: movies, total_pages } = await searchMovies(name, page);

    return (
        <div>
            <h2>Знайдені фільми</h2>
            <MoviesList movies={movies} />
            <Pagination currentPage={page} totalPages={total_pages} Id={resolvedParams.id} searchName={name} />
        </div>
    );
};

export default MoviesPage;