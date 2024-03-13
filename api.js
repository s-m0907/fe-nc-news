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

export const fetchComments = (article_id) => {
    return ncNewsApi
    .get(`/articles/${article_id}/comments?limit=40`)
    .then((response) => {
        return response.data.comments
    })
}

export const patchVotes = (article_id) => {
    const patchBody = {inc_votes: 1}
    return ncNewsApi
    .patch(`/articles/${article_id}`, patchBody)
    .then((response) => {
        return (response)
    })
}