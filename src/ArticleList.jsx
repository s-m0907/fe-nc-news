import { useState, useEffect } from 'react'
import { fetchArticles } from '../api'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        fetchArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <Loading/>
    else {
return <div className = "article-list">
    {articles.map((article) =><ArticleCard key={article.article_id} article={article}/>)}
    </div>
    }
}

export default ArticleList