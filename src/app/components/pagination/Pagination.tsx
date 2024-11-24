import Link from 'next/link';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    genreId?: number;
    searchName?: string;
};

const Pagination = ({ currentPage, totalPages, genreId, searchName}: PaginationProps) => {
    const visiblePages = 3;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    const getHref = (page: number) => {
        if (searchName) {
            return `/search/${searchName}/${page}`;
        }
        return genreId
            ? `/movieslist/${page}/${genreId}`
            : `/movieslist/${page}`;
    };

    return (
        <div className="pagination-container">

            <Link
                href={getHref(currentPage - 1)}
                style={{
                    pointerEvents: currentPage === 1 ? 'none' : 'auto',
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
            <button className="filter" disabled={currentPage === 1}>
                    &laquo; Попередня сторінка
            </button>
            </Link>

            {pages.map((page) => (
                <Link
                    key={page}
                    href={getHref(page)}
                    style={{
                        margin: '0 5px',
                        fontWeight: currentPage === page ? 'bold' : 'normal',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                <button className="filter" key={page}>

                        {page}
                </button>
                </Link>
            ))}

            <Link
                href={getHref(currentPage + 1)}
                style={{
                    pointerEvents: currentPage === totalPages ? 'none' : 'auto',
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
            <button className="filter" disabled={currentPage === totalPages}>

                    Наступна сторінка &raquo;
            </button>
            </Link>
        </div>
    );
};

export default Pagination;