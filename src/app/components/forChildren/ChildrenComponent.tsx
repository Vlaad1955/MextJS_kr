import React from "react";
import {urls} from "@/app/constant/urls";
import Link from "next/link";
import {getGenres} from "@/app/service/genre.service";

const ChildrenComponent = async () => {
    const { results: Noteworthy} = await getGenres(16, 2);

    return (
        <section className="trending">
            <h2>
                Для дітей
            </h2>
            <div className="trending-grid">
                {Noteworthy.slice(0,4).map((movie) => (
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

export default ChildrenComponent;