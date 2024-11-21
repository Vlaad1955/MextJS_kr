import React from "react";
import MoviesListCard from "@/app/components/movieslistcard/MoviesListCard";
import {CardModel} from "@/app/models/CardModel";

interface MoviesProps{
    movies: CardModel[];
}
const MoviesList: React.FC<MoviesProps> = ({movies}) =>{

    return(
        <div>
            <div className="movie-list">
                {movies.map((movie) => (
                    <MoviesListCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
};

export default MoviesList;