import { useState, useEffect } from "react";
import {ArticleCard} from "./ArticleCard";
import {getArticles} from "../api";

export const ArticlesList = () => {

    const [articlesList, setArticlesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("DESC");

    useEffect(() => {
        setIsLoading(true);
        getArticles(null, sortBy, orderBy).then((data) => {
            setArticlesList(data);
            setIsLoading(false);
        });
    }, [sortBy, orderBy]);

    if (isLoading) {
        return <p>Bear with us while we get some news...</p>
    }

    return (
        <>
            <section id="sort-articles-selector">
                <p>Sort articles by:</p>
                <select
                        id="article-list-sort-by"
                        value={sortBy}
                        onChange={(event) => {
                        setSortBy(event.target.value);
                        }}
                    >
                        <option value="title">Title</option>
                        <option value="topic">Topic</option>
                        <option value="author">Author</option>
                        <option value="created_at">Date created</option>
                        <option value="votes">Vote count</option>
                        <option value="article_img_url">Image url</option>
                </select>
            </section>
            <section id="order-by-selector">
                <select
                    id="article-list-sort-by"
                    value={orderBy}
                    onChange={(event) => {
                    setOrderBy(event.target.value);
                    }}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </section>
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