import CommentButton from '../common/CommentButton'
import TopicTag from '../common/TopicTag'
import VoteButton from '../common/VoteButton'
import styled from 'styled-components'

const Image = styled.img`
margin-top: 10px;`

const SingleArticleCard = ({article}) => {
const date = article.created_at.slice(0, 10)

    return <div className='single-article'>
        <TopicTag topic={article.topic}/>
        <Image src={article.article_img_url} alt=""></Image>
    <h2>{article.title}</h2>
    <h3>Written by {article.author}</h3>
    <h4>{date}</h4>
    <p className='article-body'>{article.body}</p>
    <div className="article-actions">
    <VoteButton article_id = {article.article_id} votes= {article.votes} />
    <CommentButton comments = {article.comment_count}/>
    </div>
    </div>
}

export default SingleArticleCard