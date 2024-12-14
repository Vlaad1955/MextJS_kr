import React from 'react';
import { getMovies } from "@/app/service/movieslist.service";
import MoviesList from "@/app/components/movieslist/MoviesList";
import Pagination from "@/app/components/pagination/Pagination";

type Params = { id: string };

const MoviesPage = async ({ params }: { params: Promise<Params> }) => {
    const resolvedParams = await params;
    const page = parseInt(resolvedParams.id, 10) || 1;

    const { results: movies, total_pages } = await getMovies(page);

    return (
        <div>
            <h2>Весь каталог фільмів</h2>
            <MoviesList movies={movies} />
            <Pagination currentPage={page} totalPages={total_pages} id={resolvedParams.id} />
        </div>
    );
};

export default MoviesPage;