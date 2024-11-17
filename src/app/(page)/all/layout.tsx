import React from "react";
import {Metadata} from "next";

export const metadata:Metadata = {
    title:`All Movies layout metadata`
}
type Props = {children: React.ReactNode}
const AllMovieLayout = ({children}: Props) => {


    return(
        <>
            {children}
        </>
    );
};

export default AllMovieLayout;