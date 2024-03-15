import CommentButton from "./CommentButton"
import VoteButton from "./VoteButton"
import TopicTag from "./TopicTag"
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { convertTimestampToDate, timeSince } from "../utils/timeSince";

const linkStyle = {
    margin: "0",
    textDecoration: "none",
    color: "black"
}

const Actions = styled.div`
position: absolute;
right: 10px;
bottom: 10px;
textDecoration: none;
color: black`

const Tag = styled.div`
position: absolute;
right: 0;
margin-right: 10px;
margin-top: 5px;`

const Wrapper = styled.div`
border: solid black 2px;
border-radius: 20px;
background: white;
text-decoration: none;
color: #444;
padding: 8px;
margin-bottom: 10px;
position: relative;`

const FlexBox = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: stretch;
flex-grow: inherit;
`

const CardImg = styled.img`
border: 1px solid #ddd;
border-radius: 4px;
padding: 5px;
width: 200px;
height: auto;
border: solid 5px white;
margin-bottom: 2px;`

const CardText = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
max-height: 50%`

const User = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ArticleCard = ({article}) => {
    const articleDate = convertTimestampToDate(article.created_at)
    const articleAge = timeSince(articleDate)
    return (
<Wrapper>
<Tag><TopicTag topic = {article.topic}/></Tag>
    <Link to={`/article/${article.article_id}`} style={linkStyle} key={article.article_id}>
        <FlexBox>
            <CardImg src={article.article_img_url} alt=""/>
            <CardText>
                <User><p className='user-post'><i className="fa-solid fa-user"></i> {article.author}</p></User>
                <h2>{article.title}</h2>
                <p>{articleAge}</p>
            </CardText>
        </FlexBox>
    </Link>
<Actions>
<VoteButton article_id = {article.article_id} votes = {article.votes}/>
<CommentButton comments = {article.comment_count}/>
    </Actions>
    </Wrapper>
)}

export default ArticleCard