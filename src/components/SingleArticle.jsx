import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticlesbyId} from '../api';
import {timeSinceDate} from '../utils';

export const SingleItem = () => {
    const {article_id} = useParams();
    console.log(article_id, "<<< useParams log")
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        console.log("data", "<<< data log")
        getArticlesbyId(article_id).then((data) => {
            console.log(data.articleObj, "<<< data log")
            setSingleArticle(data.articleObj);
            setIsLoading(false);
        });
    }, []);


    if (isLoading) {
        return <p>Loading item...</p>;
    }

    return (
        <section>
            <h2>{singleArticle.title}</h2>
            <p>Date created: {timeSinceDate(new Date(singleArticle.created_at))}</p>
            <p>Author: {singleArticle.author}</p>
            <img src={singleArticle.article_img_url}/>
            <p>{singleArticle.body}</p>
        </section>
    )
}