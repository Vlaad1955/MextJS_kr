import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MovieLayout metadata'
}
type Props = { children: React.ReactNode }
const SearchLayout = ({children}: Props) => {
    return (
        <div className="basePage">
            {children}
        </div>
    );
};

export default SearchLayout;