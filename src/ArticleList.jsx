import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { fetchArticles } from '../api'
import ArticleCard from './ArticleCard'
import Loading from './Loading'
import SortBy from './SortBy'
import OrderBy from './OrderBy'
import styled from 'styled-components'
import ErrorComponent from './ErrorComponent'
import DeleteArticle from './DeleteArticle'

const SortWrapper = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
align-items: baseline;
`

const ArticleList = ({user}) => {
    const [error, setError] = useState(null)
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { topic } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', direction)
        setSearchParams(newParams)
    }

    useEffect(() => {
        setIsLoading(true)
        fetchArticles(topic,sortByQuery, orderQuery).then((articles) => {
            if(user){
                const userArticles = articles.filter((article) => article.author === user)
                setArticles(userArticles)
                } else {
                setArticles(articles)
            }
            setIsLoading(false)
        }).catch((err) => {
            setError({err})
        })
    }, [topic, sortByQuery, orderQuery])
if(error) {
    console.log(error)
    return <ErrorComponent error={error.err.response} />
}
return <>
    <SortWrapper>
        <SortBy/><OrderBy setSortOrder = {setSortOrder}/>
        </SortWrapper>
        <div className="article-list">
  {isLoading ? (
    <Loading />
  ) : (
    articles.map((article) => (
      <ArticleCard key={article.article_id} article={article} />
    ))
  )}
</div>
</>

}

export default ArticleList