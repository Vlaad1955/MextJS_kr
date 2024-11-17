import {top9} from "@/app/service/bestselling.service";
import Link from "next/link";


const Bestselling = async () => {
    const populars = await top9();

    return (
        <section className="bestselling">
            <h2>Лідер цього тижня</h2>
            <ul className="bestselling-list">
                {populars.map((popular, index) => (
                    <li key={popular.id}> <Link href={`/all/${popular.id}`} style={{ textDecoration: 'none', color: 'inherit'}} > {index + 1}. {popular.name || popular.title}</Link>
                        <span>{Math.round(popular.popularity)}</span></li>
                ))}
            </ul>
        </section>
    );
};

export default Bestselling;