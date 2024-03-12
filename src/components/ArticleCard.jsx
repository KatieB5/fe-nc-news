import {Link} from 'react-router-dom';
import {timeSinceDate} from '../utils';

export const ArticleCard = ({article}) => {
    return (
        <article className="article-card">
            <li>
                <img src={article.article_img_url}/>
                <p>Date created: {timeSinceDate(new Date(article.created_at))}</p>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <Link to={`/ncnews/${article.title}`}>
                    <h3>{article.title}</h3>
                </Link>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                <button>Up vote</button>
                <button>Down vote</button>
            </li>
        </article>
    )
}