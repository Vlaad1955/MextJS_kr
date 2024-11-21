import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Movie genre list page",
    description: "List of films by genre",
}
type Props = { children: React.ReactNode }
const GenreLayout = ({children}: Props) => {
    return (
        <div className="basePage">
            {children}
        </div>
    );
};

export default GenreLayout;