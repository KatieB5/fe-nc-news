import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticles} from '../api';
import {ArticleCard} from './ArticleCard';
import {ErrorPage} from './ErrorPage';

export const TopicSpecificArticlesList = () => {
    const {topic} = useParams();

    const [articlesListByTopic, setArticlesListByTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getArticles(topic).then((data) => {
            setArticlesListByTopic(data);
            setIsLoading(false);
        }).catch((err) => {
            setErr(err.response);
        })
    }, []);

    if (err) {
        return <ErrorPage message={err.data.msg} status={err.status}/>
    }

    if (isLoading) {
        return <p>Just a moment, we're getting some topic-specific news...</p>
    }


    return (
        <>
            <h2>Articles about {topic}</h2>
            <section className="articles-list">
                <ul>
                    {articlesListByTopic.map((article) => {
                        return <ArticleCard article={article} key={article.article_id}/>
                    })}
                </ul>
            </section>
        </>
    )
}