"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Для динамічної навігації

const SearchComponent = () => {
    const [dataToSend, setDataToSend] = useState<string>(""); // Стан для збереження значення
    const router = useRouter(); // Використовуємо useRouter

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${dataToSend}`); // Виконуємо перенаправлення після сабміту
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="data"
                placeholder="Введіть дані"
                value={dataToSend}
                onChange={(e) => setDataToSend(e.target.value)} // Оновлюємо стан
            />
            <button type="submit">Надіслати</button>
        </form>
    );
};

export default SearchComponent;