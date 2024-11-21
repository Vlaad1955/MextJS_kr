"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Для динамічної навігації

const SearchComponent = () => {
    const [dataToSend, setDataToSend] = useState<string>(""); // Стан для збереження значення
    const router = useRouter(); // Використовуємо useRouter

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${dataToSend}/1`); // Виконуємо перенаправлення після сабміту
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="data"
                placeholder="Який фільми ви шукаєте?"
                value={dataToSend}
                onChange={(e) => setDataToSend(e.target.value)} // Оновлюємо стан
            />
            <button className="filter" type="submit">Знайти</button>
        </form>
    );
};

export default SearchComponent;