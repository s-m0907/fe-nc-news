import CommentButton from "./CommentButton"
import VoteButton from "./VoteButton"

const ArticleCard = ({article}) => {
    return <div className="article-card">
<img src={article.article_img_url}></img>
<div className="card-text">
<div className='card-top'><p>{article.author}</p><p className="topic-tag">{article.topic}</p></div>
<h2>{article.title}</h2>
<div className="article-actions">
    <VoteButton votes = {article.votes}/>
    <CommentButton comments = {article.comment_count}/>
    </div>
</div>
</div>}

export default ArticleCard