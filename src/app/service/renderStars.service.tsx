import React from 'react';

const Rating = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        const numStars = Math.round(rating / 2);

        for (let i = 0; i < numStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }

        const remainingStars = 5 - numStars;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={numStars + i} className="star">☆</span>);
        }

        return stars;
    };

    return (
        <div className="rating">
            {renderStars()}
        </div>
    );
};

export default Rating;