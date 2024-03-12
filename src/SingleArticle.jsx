import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchArticle } from '../api'
import VoteButton from './VoteButton'
import CommentButton from './CommentButton'
import Loading from './Loading'
import TopicTag from './TopicTag'

const SingleArticle = () => {
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setIsLoading(true)
        fetchArticle(article_id).then((article) => {
            setSingleArticle(article)
            setIsLoading(false)
        })
    }, [])
if(isLoading) return <Loading/>
else{
    const date = singleArticle.created_at.slice(0, 10)
    return <div className='single-article'>
        <img src={singleArticle.article_img_url}></img>
        <TopicTag topic={singleArticle.topic}/>
    <h2>{singleArticle.title}</h2>
    <h3>Written by {singleArticle.author}</h3>
    <h4>{date}</h4>
    <p className='article-body'>{singleArticle.body}</p>
    <div className="article-actions">
    <VoteButton votes = {singleArticle.votes}/>
    <CommentButton comments = {singleArticle.comment_count}/>
    </div>
</div>
} 
}

export default SingleArticle