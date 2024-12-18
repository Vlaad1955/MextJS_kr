import React from "react";
import {GetGenreID} from "@/app/service/genreId.service";
import Link from "next/link";
import UserInfoComponent from "@/app/components/userInfo/UserInfoComponent";

const AsideComponent = async () =>{

    const Genres = await GetGenreID();

    return(
        <aside className="sidebar">
            <UserInfoComponent/>
            <nav className="menu">
                <h4>Жанри</h4>
                <ul key={`genre`}>
                    {Genres.genres.map((Genre) => (
                        <li key={Genre.id}> <Link href={`/movieslist/1/${Genre.id}`} style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8rem'}} > {Genre.name} </Link> </li>
                    ))}
                </ul>
            </nav>
            <button className="sign-out">Вийти</button>
        </aside>
    );
};

export default AsideComponent;