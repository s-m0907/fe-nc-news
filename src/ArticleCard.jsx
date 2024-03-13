import CommentButton from "./CommentButton"
import VoteButton from "./VoteButton"
import TopicTag from "./TopicTag"
import styled from "styled-components";
import { Link } from 'react-router-dom'

const linkStyle = {
    margin: "0",
    textDecoration: "none",
    color: "black"
}

const ArticleCard = ({article}) => {
    return (
    <div className="article-card">
<Link to={`/article/${article.article_id}`}>
<img src={article.article_img_url}></img></Link>
<div className="card-text">
<Link to={`/article/${article.article_id}`} style={linkStyle} key={article.article_id}>
<div className='top-line'><p className='user-post'><i className="fa-solid fa-user"></i> {article.author}</p><TopicTag topic = {article.topic}/></div>
<h2>{article.title}</h2></Link>
<div className="article-actions">
    <VoteButton article_id = {article.article_id} votes = {article.votes}/>
    <CommentButton comments = {article.comment_count}/>
    </div>
</div>
</div>
    
)}

export default ArticleCard