import React from 'react';
import {Metadata} from "next";
import NewsComponent from "@/app/components/news/NewsComponent";
import TrendingComponent from "@/app/components/trending/TrendingComponent";

export const metadata: Metadata = {
    title: "Movie page",
    description: "Page about the movie",
}
type Props = { children: React.ReactNode }
const MovieLayout = ({children}: Props) => {
    return (
        <div>
            <TrendingComponent />
        <div className="basePage">
            {children}
            <NewsComponent/>
        </div>
        </div>
    );
};

export default MovieLayout;