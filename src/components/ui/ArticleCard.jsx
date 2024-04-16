import CommentButton from "../common/CommentButton.jsx"
import VoteButton from "../common/VoteButton.jsx"
import TopicTag from "../common/TopicTag.jsx"
import styled, {css} from "styled-components";
import { Link } from 'react-router-dom'
import { convertTimestampToDate, timeSince } from "../../services/utils.js";
import { useDarkMode } from '../../../contexts/DarkMode.jsx'
import DeleteArticle from "../common/DeleteArticle.jsx";
import { useState, useContext } from "react" 
import UserContext from "../../../contexts/User.jsx";

const LinkStyle = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: black;

  ${props =>
    props.darkMode &&
    css`
      color: whitesmoke;
    `}
`

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

const ArticleWrapper = styled.div`
  // border: solid black 2px;
  border-radius: 2px;
  background: rgba(191, 79, 116, 0.3);
  text-decoration: none;
  color: #444;
  padding: 10px;
  margin-bottom: 10px;
  max-height: 300px;
  min-width: 80%;
  position: relative;

  ${props =>
    props.darkMode &&
    css`
      border-color: #ffffff;
    `}
`

const FlexBox = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: stretch;
flex-grow: inherit
max-height: 300px;
`

const CardImg = styled.img`
padding: 5px;
width: 200px;
max-width: 100%;
height: auto;
max-height: 300px;
min-height: 100%;
object-fit: contain;
display: block;
margin: 0 auto;
margin-bottom: 2px;
margin-right: 5px;
`

const CardText = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
max-height: 50%
`

const User = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const MessageText = styled.p`
font-weight: bold;
color: #BF4F74;
`

const ArticleCard = ({article}) => {
  const [isDeleted, setIsDeleted] = useState(false)
    const articleDate = convertTimestampToDate(article.created_at)
    const articleAge = timeSince(articleDate)
    const { darkMode } = useDarkMode()
    const { loggedInUser } = useContext(UserContext)

    if(isDeleted) {
      return <div>
          <MessageText><i className="fa-regular fa-square-minus"></i> Article Deleted</MessageText>
          </div>
  } else {
    return (
<ArticleWrapper darkMode={darkMode}>
<Tag><TopicTag topic = {article.topic}/></Tag>
    <LinkStyle to={`/article/${article.article_id}`} darkMode={darkMode} key={article.article_id}>
        <FlexBox>
            <CardImg src={article.article_img_url} alt=""/>
            <CardText>
                <User><p className='user-post'><i className="fa-solid fa-user"></i> {article.author}</p></User>
                <h3>{article.title}</h3>
                <p>{articleAge}</p>
            </CardText>
        </FlexBox>
    </LinkStyle>
<Actions>
<VoteButton article_id = {article.article_id} votes = {article.votes}/>
<Link to={`/article/${article.article_id}`}><CommentButton comments = {article.comment_count}/></Link>
{ loggedInUser.username === article.author ? <DeleteArticle article_id={article.article_id} setIsDeleted={setIsDeleted}/> : <></>
}
    </Actions>
    </ArticleWrapper>
)}
}

export default ArticleCard