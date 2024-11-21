import React from 'react';
import {Metadata} from "next";
import TrendingComponent from "@/app/components/trending/TrendingComponent";

export const metadata: Metadata = {
    title: "Search page",
    description: "Your movie search page",
}
type Props = { children: React.ReactNode }
const SearchLayout = ({children}: Props) => {
    return (
        <div>
            <TrendingComponent />
        <div className="basePage">
            {children}
        </div>
        </div>
    );
};

export default SearchLayout;