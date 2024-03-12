import CommentButton from "./CommentButton"
import VoteButton from "./VoteButton"
import TopicTag from "./TopicTag"

const ArticleCard = ({article}) => {
    return (
    <div className="article-card">
<img src={article.article_img_url}></img>
<div className="card-text">
<div className='card-top'><p>{article.author}</p><TopicTag topic = {article.topic}/></div>
<h2>{article.title}</h2>
<div className="article-actions">
    <VoteButton votes = {article.votes}/>
    <CommentButton comments = {article.comment_count}/>
    </div>
</div>
</div>
    
)}

export default ArticleCard