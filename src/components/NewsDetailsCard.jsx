import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div className='space-y-5'>
            <img className='h-[350px] w-full object-cover' src={news.image_url} alt="" />
            <h1>{news.title}</h1>
            <p>{news.details}</p>

            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;