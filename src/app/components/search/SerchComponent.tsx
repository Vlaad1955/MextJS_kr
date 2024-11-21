"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchComponent = () => {
    const [dataToSend, setDataToSend] = useState<string>("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${dataToSend}/1`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="data"
                placeholder="Який фільми ви шукаєте?"
                value={dataToSend}
                onChange={(e) => setDataToSend(e.target.value)}
            />
            <button className="filter" type="submit">Знайти</button>
        </form>
    );
};

export default SearchComponent;