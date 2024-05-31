import React from 'react';

const Pagination = ({ currentPage, setPage, totalCount, limit, className }) => {
    const totalPages = Math.ceil(totalCount / limit);

    const onNext = () => {
        setPage(currentPage + 1);
    };
    
    const onPrevious = () => {
        setPage(currentPage - 1);
    };

    if(totalPages > 1) {

        return (
            <ul
                className='pagination-container'
            >
                <li
                    className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={onPrevious}
                    >
                    <div className="arrow left" />
                </li>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                    <li
                        key={page}
                        className={`pagination-item ${page === currentPage ? 'selected' : ''}`}
                        onClick={() => setPage(page)}
                    >
                        {page}
                    </li>
                ))}
                <li
                    className={`pagination-item' ${currentPage === totalPages ? 'disabled': ''}`}
                    onClick={onNext}
                >
                    <div className="arrow right" />
                </li>
            </ul>
        );
    }
};

export default Pagination;


