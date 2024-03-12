import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-ydib.onrender.com/api'
})

export const fetchArticles = () => {
    return ncNewsApi
    .get('/articles?limit=40')
    .then((response) => {
        return response.data.articles
    })
}

export const fetchArticle = (article_id) => {
    return ncNewsApi
    .get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}