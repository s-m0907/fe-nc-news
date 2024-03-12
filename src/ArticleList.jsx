import { useState, useEffect } from 'react'
import { fetchArticles } from '../api'
import ArticleCard from './ArticleCard'

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        fetchArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])
return <div className = "article-list">{articles.map((article) => <ArticleCard key={article.article_id} article={article}/>)}</div>
}

export default ArticleList