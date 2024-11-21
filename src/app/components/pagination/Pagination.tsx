import Link from 'next/link';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    genreId?: number; // ID жанру є необов’язковим
};

const Pagination = ({ currentPage, totalPages, genreId }: PaginationProps) => {
    const visiblePages = 3; // Кількість відображуваних сторінок
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    const getHref = (page: number) => {
        return genreId
            ? `/movieslist/${page}/${genreId}`
            : `/movieslist/${page}`;
    };

    return (
        <div className="pagination-container">
            {/* Кнопка "Попередня сторінка" */}
            <button className="filter" disabled={currentPage === 1}>
                <Link
                    href={getHref(currentPage - 1)}
                    style={{
                        pointerEvents: currentPage === 1 ? 'none' : 'auto',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    &laquo; Попередня сторінка
                </Link>
            </button>

            {/* Сторінки */}
            {pages.map((page) => (
                <button className="filter" key={page}>
                    <Link
                        href={getHref(page)}
                        style={{
                            margin: '0 5px',
                            fontWeight: currentPage === page ? 'bold' : 'normal',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        {page}
                    </Link>
                </button>
            ))}

            {/* Кнопка "Наступна сторінка" */}
            <button className="filter" disabled={currentPage === totalPages}>
                <Link
                    href={getHref(currentPage + 1)}
                    style={{
                        pointerEvents: currentPage === totalPages ? 'none' : 'auto',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    Наступна сторінка &raquo;
                </Link>
            </button>
        </div>
    );
};

export default Pagination;