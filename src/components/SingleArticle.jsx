import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticlesbyId} from '../api';
import {timeSinceDate} from '../utils';
import { CommentsList } from './CommentsList';

export const SingleArticle = () => {
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticlesbyId(article_id).then((data) => {
            setSingleArticle(data.articleObj);
            setIsLoading(false);
        });
    }, []);


    if (isLoading) {
        return <p>Brb, just getting your article...</p>;
    }

    return (
        <>
            <section>
                <h2>{singleArticle.title}</h2>
                <p>Date created: {timeSinceDate(new Date(singleArticle.created_at))}</p>
                <p>Author: {singleArticle.author}</p>
                <img src={singleArticle.article_img_url}/>
                <p>{singleArticle.body}</p>
            </section>
            <section>
                <CommentsList/>
            </section>
        </>
    )
}