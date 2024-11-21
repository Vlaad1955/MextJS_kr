import React from 'react';
import {Metadata} from "next";
import TrendingComponent from "@/app/components/trending/TrendingComponent";

export const metadata: Metadata = {
    title: "Movie list page",
    description: "List of all movies",
}
type Props = { children: React.ReactNode }
const MovieLayout = ({children}: Props) => {
    return (
        <div>
            <TrendingComponent />
        <div className="basePage">
            {children}
        </div>
        </div>
    );
};

export default MovieLayout;