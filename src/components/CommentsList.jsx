import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {getCommentsByArticleId} from '../api';
import {CommentCard} from './CommentCard';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import {postNewComment} from '../api'
import {ErrorPage} from './ErrorPage';

export const CommentsList = () => {
    const {article_id} = useParams();
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [newComment, setNewComment] = useState({
        username: loggedInUser.username,
        body: ""
    });
    const [commentSuccess, setCommentSuccess] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id).then((data) => {
            setCommentsList(data)
            setIsLoading(false)
        }).catch((err) => {
            setErr(err.response);
        })
    }, []);

    const handleNewCommentInput = () => {
        const currentNewComment = {...newComment};
        currentNewComment.body = event.target.value;
        setNewComment(currentNewComment);
    }
    
    const handleNewCommentSubmit = (event) => {
        event.preventDefault();
        
        postNewComment(newComment, article_id)
        .then((response) => {
            setCommentsList((commentsList) => {
                return [response, ...commentsList];
            });
            setErr(null);
            setCommentSuccess(true);
            })
        .catch((err) => {
            alert("Comment could not be posted :( Please try again!")
        });
        
        setCommentSuccess(false);
        setNewComment({
            username: loggedInUser.username,
            body: ""
        });
    }

    if (err) {
        return <ErrorPage message={err.data.msg} status={err.status}/>
    }

    if (isLoading) {
        return (
            <p>Just fetching some comments for this article...</p>
        )
    }

    return (
        <section className="comments-list">
            <h3>Comments</h3>
            {commentSuccess ? <p id="comment-success-text">Your comment has been added! &#127881;</p> : null}
            {err ? <p>{err}</p> : null}
            <form className="add-comment-form" onSubmit={handleNewCommentSubmit}>
                <label htmlFor="new-comment_body" className="add-comment-label">
                    New comment: 
                </label>  
                    <input
                        type="text"
                        required
                        className="add-comment-input"
                        id="new-comment_body"
                        onChange={handleNewCommentInput}
                        value={newComment.body}
                    />
                <button className="add-new-comment-submit">Add comment!</button>
            </form>
            <ul>
                {commentsList.map((comment) => {
                    return <CommentCard comment={comment} setCommentsList={setCommentsList} key={comment.comment_id}/>
                })}
            </ul>
        </section>
    )
}