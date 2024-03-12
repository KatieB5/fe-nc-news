import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticlesbyId} from '../api';
import {timeSinceDate} from '../utils';
import { CommentsList } from './CommentsList';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import {postNewComment} from '../api'

export const SingleArticle = () => {
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [newComment, setNewComment] = useState({
        username: loggedInUser.username,
        body: ""
    });
    const [commentSuccess, setCommentSuccess] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticlesbyId(article_id).then((data) => {
            setSingleArticle(data.articleObj);
            setIsLoading(false);
        });
    }, []);

    const handleNewCommentInput = () => {
        const currentNewComment = {...newComment};
        currentNewComment.body = event.target.value;
        setNewComment(currentNewComment);
    }

    const handleNewCommentSubmit = (event) => {
        event.preventDefault();

        postNewComment(newComment, article_id).then((response) => {
            setCommentSuccess(true);
        });

        setNewComment({
            username: loggedInUser.username,
            body: ""
        });
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
                <img src={singleArticle.article_img_url}/>
                <p>{singleArticle.body}</p>
            </section>
            {commentSuccess ? <p id="comment-success-text">Your comment has been added! &#127881;</p> : null}
            <form className="add-comment-form" onSubmit={handleNewCommentSubmit}>
                <label htmlFor="new-comment_body" className="add-comment-label">
                    New comment: 
                </label>  
                    <input
                        type="text"
                        className="add-comment-input"
                        id="new-comment_body"
                        onChange={handleNewCommentInput}
                        value={newComment.body}
                    />
                <button className="add-new-comment-submit">Add comment!</button>
            </form>
            <section className="comments-list">
                <CommentsList/>
            </section>
        </>
    )
}