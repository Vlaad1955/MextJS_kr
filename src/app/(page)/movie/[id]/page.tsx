import React from 'react';
import {getToId} from "@/app/service/movieId.service";
import {urls} from "@/app/constant/urls";

type Params = { id: string }

const MoviePage = async ({params}: { params: Params }) => {
    const locale = await params;
    const movie = await getToId(locale.id);

    return (
        <section className="movie-details">
            <header
                className="movie-header"
                style={{
                    backgroundImage: `url(${urls.imageBaseURL}${movie.backdrop_path})`,
                }}
            >
                <div className="header-overlay">
                    <h1>{movie.title}</h1>
                    <p className="original-title">{movie.original_title}</p>
                </div>
            </header>

            <div className="movie-content">
                <div className="info-section">
                    <h2>Огляд</h2>
                    <p>{movie.overview || "No overview available."}</p>
                    <p className="release-date">
                        <strong>Дата виходу:</strong> {movie.release_date || "Unknown"}
                    </p>
                </div>

                {movie.production_companies.length > 0 && (
                    <div className="production-section">
                        <h2>Компанії розробники</h2>
                        <ul className="production-list">
                            {movie.production_companies.map((company) => (
                                <li key={company.id} className="company-item">
                                    {company.logo_path ? (
                                        <img
                                            src={`${urls.imageBaseURL}${company.logo_path}`}
                                            alt={company.name}
                                            className="company-logo"
                                        />
                                    ) : (
                                        <span>{company.name}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MoviePage;