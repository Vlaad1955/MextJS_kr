import NewsComponent from "@/app/components/news/NewsComponent";
import TrendingComponent from "@/app/components/trending/TrendingComponent";
import React from "react";
import ChildrenComponent from "@/app/components/forChildren/ChildrenComponent";
import {getGenres} from "@/app/service/genre.service";
import BaseComponent from "@/app/components/base/BaseComponent";

export default async function Home() {

    const {results: movies} = await getGenres(16, 2);

    return (
        <div>
            <TrendingComponent/>
            <div className="basePage">
                <div className="theСentralPart">
                    <ChildrenComponent/>
                    <BaseComponent movies={movies.slice(0,4)}/>
                </div>
                <NewsComponent/>
            </div>
        </div>
    );
};
