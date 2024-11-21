import React from "react";
import Rating from "@/app/service/renderStars.service";
import {urls} from "@/app/constant/urls";
import Link from "next/link";

const MoviesListCard = ({movie}) =>{

    return(
        <div className="movie-card">
            <div className="card-image">
                <img src={`${urls.imageBaseURL}${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className="card-content">
                <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-category">
                    <span className="icon">📽️ {movie.release_date}</span></p>
                    <div className="card-footer">
                        <Rating rating={movie.vote_average} />
                        <div className="social">
                            <span className="icon">🌐</span>
                        </div>
                    </div>
                    <div>
                <p className="card-description">
                    {movie.overview}
                </p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default MoviesListCard;