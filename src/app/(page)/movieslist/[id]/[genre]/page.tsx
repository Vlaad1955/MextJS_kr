import React from 'react';
import Pagination from "@/app/components/pagination/Pagination";
import { getGenres } from "@/app/service/genre.service";
import MoviesList from "@/app/components/movieslist/MoviesList";

type Params = {
    id: string;
    genre: string;
};

const MoviesPage = async ({ params }: { params: Promise<Params> }) => {

    const resolvedParams = await params;
    const page = parseInt(resolvedParams.id || "1", 10);
    const genre = parseInt(resolvedParams.genre, 10);

    const { results: movies, total_pages } = await getGenres(genre, page);

    return (
        <div>
            <h2>Фільми по жанрах</h2>
            <MoviesList movies={movies} />
            <Pagination currentPage={page} totalPages={total_pages} Id={resolvedParams.id} genreId={genre} />
        </div>
    );
};

export default MoviesPage;