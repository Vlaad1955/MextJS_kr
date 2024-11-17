import React from "react";
import TrendingComponent from "@/app/components/trending/TrendingComponent";
import Link from "next/link";

const HeaderComponent = () =>{
    return(
        <header className="header-container">
            <div className="top-bar">
                <div className="filters">
                    <span className="filter"><Link href="/" style={{ textDecoration: 'none', color: 'inherit'}} >Головна сторінка</Link></span>
                    <span className="filter">All Time</span>
                </div>
                <input type="text" className="search-bar" placeholder="Search your interests..."/>
                    <div className="now-playing">Now Playing: Bad Times at the El Royale</div>
            </div>
            <TrendingComponent/>
        </header>
    );
};

export default HeaderComponent;