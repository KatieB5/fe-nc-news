import {timeSinceDate} from '../utils';

export const CommentCard = ({comment}) => {
    return (
        <article className="comment-card">
            <p>Date posted: {timeSinceDate(new Date(comment.created_at))}</p>
            <p>By: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
        </article>
    )
}