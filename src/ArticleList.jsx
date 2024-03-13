import { useState, useEffect } from 'react'
import { fetchArticles } from '../api'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const ArticleList = ({user}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        fetchArticles().then((articles) => {
            if(user){
                const userArticles = articles.filter((article) => article.author === user)
                setArticles(userArticles)
                } else {
                setArticles(articles)
            }
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