import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchArticle } from '../api'
import Loading from './Loading'
import SingleArticleCard from './SingleArticleCard'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import ErrorComponent from './ErrorComponent'

const SingleArticle = () => {
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
        setIsLoading(true)
        fetchArticle(article_id).then((article) => {
            setSingleArticle(article)
            setIsLoading(false)
        }).catch((err) => {
            setError(err)
        })
    }, [])
if(error) {
    return <ErrorComponent error={error.response} />
}
if(isLoading) return <Loading/>
else{
   return<>
   <SingleArticleCard article = {singleArticle} setSingleArticle = {setSingleArticle}/>
   <div id="comments">
   <CommentList article_id = { article_id }/>
   </div>
   </>
} 
}

export default SingleArticle