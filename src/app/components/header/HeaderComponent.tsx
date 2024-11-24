
import React from "react";
import Link from "next/link";
import SearchComponent from "@/app/components/search/SerchComponent";


const HeaderComponent = () => {

    return (
        <header className="header-container">
            <div className="top-bar">
                <div className="filters">
                    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="filter">
                            Головна сторінка
                    </span>
                    </Link>
                    <Link href="/movieslist/1" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="filter">
                            Каталог фільмів
                    </span>
                    </Link>
                </div>
                <span className="search-bar-container">
                    <SearchComponent/>
                    </span>
            </div>

        </header>
    );
};

export default HeaderComponent;


