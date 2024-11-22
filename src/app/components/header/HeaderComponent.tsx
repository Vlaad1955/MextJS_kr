
import React from "react";
import Link from "next/link";
import SearchComponent from "@/app/components/search/SerchComponent";


const HeaderComponent = () => {

    return (
        <header className="header-container">
            <div className="top-bar">
                <div className="filters">
                    <span className="filter">
                        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                            Головна сторінка
                        </Link>
                    </span>
                    <span className="filter">
                        <Link href="/movieslist/1" style={{ textDecoration: "none", color: "inherit" }}>
                            Каталог фільмів
                        </Link>
                    </span>
                </div>
                <span className="search-bar-container">
                    <SearchComponent/>
                    </span>
            </div>

        </header>
    );
};

export default HeaderComponent;


