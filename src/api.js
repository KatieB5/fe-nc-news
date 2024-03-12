import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://be-nc-news-3me1.onrender.com/api/"
});

export const getArticles = () => {
    return ncNewsApi.get("articles").then((response) => {
        return response.data;
    })
}

export const getArticlesbyId = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}`).then((response) => {
        return response.data;
    })
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}/comments`).then((response) => {
        return response.data;
    })
}

export const updateArticleVotes = (article_id, inc_votes) => {
    return ncNewsApi.patch(`articles/${article_id}`, {article_id: article_id, inc_votes: inc_votes}).then((response) => {
        return response.data;
    })
}

export const postNewComment = (newComment, article_id) => {
    return ncNewsApi.post(`articles/${article_id}/comments`, newComment).then((response) => {
        return response.data;
    })
}