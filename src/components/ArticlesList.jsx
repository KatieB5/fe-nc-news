import { useState, useEffect } from "react";
import {ArticleCard} from "./ArticleCard";
import {getArticles} from "../api";

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
        <section className="articles-list">
            <h2 className="articles-list-title">Some news</h2>
            <ul>
                {articlesList.map((article) => {
                    return <ArticleCard article={article} key={article.article_id}/>
                })}
            </ul>
        </section>
    )

}