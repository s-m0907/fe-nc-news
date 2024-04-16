import React from 'react';
import classnames from 'classnames';

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
                className={classnames('pagination-container', { [className]: className })}
            >
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left" />
                </li>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                    <li
                        key={page}
                        className={classnames('pagination-item', {
                            selected: page === currentPage
                        })}
                        onClick={() => setPage(page)}
                    >
                        {page}
                    </li>
                ))}
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === totalPages
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right" />
                </li>
            </ul>
        );
    }
};

export default Pagination;


