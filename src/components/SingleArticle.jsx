import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticlesbyId} from '../api';
import {timeSinceDate} from '../utils';
import { CommentsList } from './CommentsList';
import {ErrorPage} from './ErrorPage';

export const SingleArticle = () => {
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getArticlesbyId(article_id).then((data) => {
            setSingleArticle(data.articleObj);
            setIsLoading(false);
            setErr(null);
        }).catch((err) => {
            setErr(err.response);
        })
    }, []);

    if (err) {
        return <ErrorPage message={err.data.msg} status={err.status}/>
    }

    if (isLoading) {
        return <p>Brb, just getting your article...</p>;
    }

    return (
        <>
            <section className="single-article-details">
                <h2>{singleArticle.title}</h2>
                <p>Date created: {timeSinceDate(new Date(singleArticle.created_at))}</p>
                <p>Author: {singleArticle.author}</p>
                <img src={singleArticle.article_img_url} className="single-article-image"/>
                <p>{singleArticle.body}</p>
            </section>
            <section className="comments-list">
                <CommentsList/>
            </section>
        </>
    )
}