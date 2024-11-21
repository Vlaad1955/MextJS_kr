import React from "react";
import {NoteworthyService} from "@/app/service/noteworthy.service";
import {urls} from "@/app/constant/urls";
import Link from "next/link";

const TrendingComponent = async () => {
    const { results: Noteworthy} = await NoteworthyService(1);

    return (
        <section className="trending">
            <h2>
                Популярні та варті уваги
            </h2>
            <div className="trending-grid">
                {Noteworthy.slice(0,6).map((movie) => (
                    <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <div className="card large" key={movie.id}>
                        <img
                            src={`${urls.imageBaseURL}${movie.poster_path}`}
                            alt={movie.title || "Movie"}
                        />
                        <div className="overlay">
                            <span className="badge">Бал {movie.vote_average}</span>
                            <p>{movie.title}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default TrendingComponent;