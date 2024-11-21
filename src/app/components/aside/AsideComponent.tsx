import React from "react";
import {GetGenreID} from "@/app/service/genreId.service";
import Link from "next/link";

const AsideComponent = async () =>{

    const Genres = await GetGenreID();

    return(
        <aside className="sidebar">
            <div className="profile">
                <img src="https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg" alt="Profile Picture"/>
                    <h3>User1978</h3>
                    <p>Ukraine, Lviv</p>
            </div>
            <nav className="menu">
                <h4>Жанри</h4>
                <ul>
                    {Genres.genres.map((Genre) => (
                        <li> <Link href={`http://localhost:3000/movieslist/1/${Genre.id}`} style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8rem'}} > {Genre.name} </Link> </li>
                    ))}
                </ul>
            </nav>
            <button className="sign-out">Sign Out</button>
        </aside>
    );
};

export default AsideComponent;