import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-ydib.onrender.com/api'
})

export const fetchTopics = () => {
return ncNewsApi
.get('/topics')
.then((response) => {
    return response.data.topics
})
}

export const fetchArticles = (topic, sortBy, order, limit=50, p=1) => {
    return ncNewsApi
    .get(`/articles?`, {params: {topic: topic, sort_by: sortBy, order: order, limit: limit, p: p}})
    .then((response) => {
        return response.data
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
        return response
    })
}

export const postComment = (user, newComment, article_id) => {
    const postBody = {
        username: user,
        body: newComment
    }
    return ncNewsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((response) => {
        return response.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return ncNewsApi
    .delete(`/comments/${comment_id}`)
    .then((response) => {
        return response
    })
}

export const patchCommentVotes = (comment_id, votes) => {
    const patchBody = {inc_votes: votes}
    return ncNewsApi
    .patch(`/comments/${comment_id}`, patchBody)
    .then((response) => {
        return response
    })
}

export const postArticle = (post) => {
    const postBody = post
    return ncNewsApi.post('/articles', postBody)
    .then((response) => {
        return response
    })
}

export const deleteArticle = (article_id) => {
    return ncNewsApi.delete(`/articles/${article_id}`)
    .then((response) => {
        return response
    })
}

export const postTopic = (postBody) => {
    return ncNewsApi.post(`/topics`, postBody)
    .then((response) => {
        return response
    })
}