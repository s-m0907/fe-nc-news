import { useState, useEffect } from 'react'
import { fetchArticles } from '../api'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white"
}

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
    {articles.map((article) =><Link to={`/article/${article.article_id}`} style={linkStyle} key={article.article_id}><ArticleCard key={article.article_id} article={article}/></Link>)}
    </div>
    }
}

export default ArticleList