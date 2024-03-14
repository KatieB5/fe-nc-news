import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticles} from '../api';
import {ArticleCard} from './ArticleCard';

export const TopicSpecificArticlesList = () => {
    const {topic} = useParams();

    const [articlesListByTopic, setArticlesListByTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles(topic).then((data) => {
            setArticlesListByTopic(data);
            setIsLoading(false);
        });
    }, []);

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