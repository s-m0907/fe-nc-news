import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { fetchArticles } from '../services/api'
import ArticleCard from '../components/ui/ArticleCard'
import Loading from '../components/common/Loading'
import SortBy from '../components/common/SortBy'
import OrderBy from '../components/common/OrderBy'
import ErrorComponent from '../components/ui/ErrorComponent'
import Topic from '../components/common/Topic'

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
    const [isTopic, setIsTopic] = useState(false)
    const [currSort, setCurrSort] = useState('Newest')

    const setOrder = (direction) => {
      if (orderQuery !== direction) {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', direction)
        setSearchParams(newParams)
      }
    }

    const setSort = (sort) => {
      if (sortByQuery !== sort){
      const newParams = new URLSearchParams(searchParams)
      newParams.set('sort_by', sort)
      setSearchParams(newParams)
    }
  }

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('sort_by');
    newParams.delete('order');
    setSearchParams(newParams);
    setCurrSort('Newest')
}, [topic]);

    useEffect(() => {
        setIsLoading(true)
        fetchArticles(topic, sortByQuery, orderQuery).then((articles) => {
            if(topic){
                setIsTopic(!!topic)
            }
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
    }, [topic, searchParams])

if(error) {
    console.log(error)
    return <ErrorComponent error={error.err.response} />
}
return (
    <>
      <SortWrapper>
        <SortBy setSort={setSort} currSort={currSort} setCurrSort={setCurrSort}/>
        <OrderBy setOrder={setOrder} />
        {isTopic && <Topic topic={topic} />}
      </SortWrapper> 
      <div className="article-list">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default ArticleList