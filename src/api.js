import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://be-nc-news-3me1.onrender.com/api/"
});

export const getArticles = () => {
    return ncNewsApi.get("articles").then((response) => {
        return response.data
    })
}

export const getArticlesbyId = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}`).then((response) => {
        console.log(response, "<< response from api")
        return response.data
    })
}