import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { fetchArticles } from '../services/api'
import ArticleCard from '../components/ui/ArticleCard'
import Loading from '../components/common/Loading'
import SortBy from '../components/common/SortBy'
import OrderBy from '../components/common/OrderBy'
import ErrorComponent from '../components/ui/ErrorComponent'
import Topic from '../components/common/Topic'
import Pagination from '../components/common/Pagination'

const SortWrapper = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
align-items: baseline;
`

const ArticleList = ({user, currentTopic, isTopic}) => {
    const [error, setError] = useState(null)
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currSort, setCurrSort] = useState('Newest')
    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('created_at')
    const [order, setOrder] = useState('desc')
    const prevTopic = useRef(null)

    useEffect(() => {
      if (currentTopic !== prevTopic.current) {
        setPage(1);
        setSort('created_at')
        setOrder('desc')
      }
    }, [currentTopic]);

    useEffect(() => {
      setIsLoading(true)
      const topic = currentTopic ? currentTopic.slug : ''

      fetchArticles(topic, sort, order, limit, page)
      .then(({articles, totalCount}) => {
        if(user){
          const userArticles = articles.filter((article) => article.author === user)
          setArticles(userArticles)
          } else {
          setArticles(articles)
          setTotalCount(totalCount)
        }})
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setIsLoading(false)
          })
    }, [page, currentTopic, sort, order])

if(error) {
    console.log(error)
    return <ErrorComponent error={error.response} />
}
return (
    <>
      <SortWrapper>
        <SortBy setSort={setSort} currSort={currSort} setCurrSort={setCurrSort}/>
        <OrderBy setOrder={setOrder} />
        {isTopic && <Topic topic={currentTopic} />}
      </SortWrapper> 
      <div className="article-list">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
              <Pagination
        className="pagination-bar"
        currentPage={page}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        onPageChange={setPage}
      />
          </>
        )}
      </div>
    </>
  );
}

export default ArticleList