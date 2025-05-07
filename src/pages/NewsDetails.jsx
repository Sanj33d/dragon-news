import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();

    const {id} = useParams();

    const [news, setNews] = useState({})

    // console.log(data, id, news)

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails)
        
    }, [data, id])
    
    return (
        <div className='w-11/12 mx-auto py-5'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h1 className='font-bold'>Dragon News</h1>
                    <div className='border-1 p-5'>
                        <NewsDetailsCard news={news}></NewsDetailsCard>
                    </div>
                </section>
                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;