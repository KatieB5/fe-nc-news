import {Link} from 'react-router-dom';
import {timeSinceDate} from '../utils';
import {useState} from 'react';
import {updateArticleVotes} from '../api';

export const ArticleCard = ({article}) => {

    const [articleVotes, setArticleVotes] = useState(article.votes);
    const [err, setErr] = useState(null);

    const handleArticleUpVote = () => {
        setArticleVotes((currArticleVotes) => currArticleVotes + 1)
        setErr(null);
        updateArticleVotes(article.article_id, 1).catch((err) => {
            setArticleVotes((currArticleVotes) => currArticleVotes - 1);
            setErr("Voting error, please try again!");   
        });
    }

    const handleArticleDownVote = () => {
        setArticleVotes((currArticleVotes) => currArticleVotes - 1)
        updateArticleVotes(article.article_id, -1).catch((err) => {
            setArticleVotes((currArticleVotes) => currArticleVotes + 1);
            setErr("Voting error, please try again!");   
        });
    }

    return (
        <article className="article-card">
            <section id="article-card-content">
                <li>
                    <img src={article.article_img_url}/>
                    <p>Date created: {timeSinceDate(new Date(article.created_at))}</p>
                    <p>Author: {article.author}</p>
                    <p>Topic: {article.topic}</p>
                    <Link to={`/ncnews/${article.article_id}`}>
                        <h3>{article.title}</h3>
                    </Link>
                    <p>Number of comments: {article.comment_count}</p>
                    <p>Votes: {articleVotes}</p>
                </li>
            </section>
                    {err ? <p>{err}</p> : null}
                    <button onClick={handleArticleUpVote} id="article-up-vote-button">Up vote</button>
                    <button onClick={handleArticleDownVote} id="article-down-vote-button">Down vote</button>
            <section id="article-card-buttons">

            </section>
        </article>
    )
}