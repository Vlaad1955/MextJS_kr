"use client"
import React, { useEffect, useState } from "react";
import { CardModel } from "@/app/models/CardModel";
import {urls} from "@/app/constant/urls";

type MovieCardProps = {
    movies: CardModel[];
};

const MovieCarousel: React.FC<MovieCardProps> = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === movies.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    return (
        <div className="carousel">
            {movies.map((movie, index) => (
                <div
                    key={movie.id}
                    className={`cardCarousel ${index === currentIndex ? "active" : ""}`}
                    style={{
                        backgroundImage: `url(${urls.imageBaseURL}${movie.backdrop_path})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="titleCarousel">{movie.title}</div>
                </div>
            ))}
            <div className="indicators">
                {movies.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default MovieCarousel;