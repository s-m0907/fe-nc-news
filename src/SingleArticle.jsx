import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchArticle } from '../api'
import Loading from './Loading'
import SingleArticleCard from './SingleArticleCard'
import CommentList from './CommentList'

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
   return<>
   <SingleArticleCard article = {singleArticle} setSingleArticle = {setSingleArticle}/>
   <CommentList article_id = { article_id }/>
   </> 
} 
}

export default SingleArticle