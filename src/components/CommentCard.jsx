import {timeSinceDate} from '../utils';
import { useContext, useState } from 'react';
import {UserContext} from '../contexts/User';
import {deleteCommentbyId} from '../api';

export const CommentCard = ({comment, setCommentsList}) => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);    

    const handleDeleteComment = () => {
            deleteCommentbyId(comment.comment_id)
            .then(() => {
                setCommentsList((currCommentsList) => {
                    const newCommentsList = currCommentsList.filter((currComment) =>
                    currComment.comment_id !== comment.comment_id
                    )
                    alert("Comment successfully deleted!")
                    return newCommentsList;
                })
            })
            .catch((err) => {
                alert("Comment couldn't be deleted, please try again!")
            });
    }


    return (
        <article className="comment-card">
            <p>Date posted: {timeSinceDate(new Date(comment.created_at))}</p>
            <p>By: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            {loggedInUser.username === comment.author ? <button onClick={handleDeleteComment} id="delete-comment-button">Delete</button> : null}
        </article>
    )
}