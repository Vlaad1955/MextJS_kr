import React from 'react';
import MoviesList from "@/app/components/movieslist/MoviesList";
import {searchMovies} from "@/app/service/movieSearch.service";

type Params = {  name: string };
const MoviesPage = async ({ params }: { params: Params }) => {

    const name = params.name;
    const movies = await searchMovies(name);

    return (
        <div>
            <h2>Знайдені фільми</h2>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default MoviesPage;