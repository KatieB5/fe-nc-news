import { useState, useEffect } from "react";
import {ArticleCard} from "./ArticleCard";
import {getArticles} from "../api";
import {Title} from './Title';

export const ArticlesList = () => {

    const [articlesList, setArticlesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles().then((data) => {
            setArticlesList(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Bear with us while we get some news...</p>
    }

    return (
        <>
            <Title/>
            <section className="articles-list">
                <ul>
                    {articlesList.map((article) => {
                        return <ArticleCard article={article} key={article.article_id}/>
                    })}
                </ul>
            </section>
        </>
    )

}