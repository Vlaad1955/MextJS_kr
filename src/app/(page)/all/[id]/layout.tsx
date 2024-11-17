import React from 'react';
import {Metadata} from "next";
import NewsComponent from "@/app/components/news/NewsComponent";

export const metadata: Metadata = {
    title: 'MovieLayout metadata'
}
type Props = { children: React.ReactNode }
const MovieLayout = ({children}: Props) => {
    return (
        <div className="basePage">
            {children}
            <NewsComponent/>
        </div>
    );
};

export default MovieLayout;