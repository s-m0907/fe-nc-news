import CommentButton from "./CommentButton"
import VoteButton from "./VoteButton"
import TopicTag from "./TopicTag"
import styled, {css} from "styled-components";
import { Link } from 'react-router-dom'
import { convertTimestampToDate, timeSince } from "../utils/timeSince";
import { useDarkMode } from '../contexts/DarkMode.jsx'

const LinkStyle = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: black; /* Default text color */

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
  border: solid black 2px;
  border-radius: 20px;
  background: transparent;
  text-decoration: none;
  color: #444;
  padding: 8px;
  margin-bottom: 10px;
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
flex-grow: inherit;
`

const CardImg = styled.img`
padding: 5px;
width: 200px;
height: auto;
margin-bottom: 2px;
margin-right: 5px`

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

const ArticleCard = ({article}) => {
    const articleDate = convertTimestampToDate(article.created_at)
    const articleAge = timeSince(articleDate)
    const { darkMode } = useDarkMode()

    return (
<ArticleWrapper darkMode={darkMode}>
<Tag><TopicTag topic = {article.topic}/></Tag>
    <LinkStyle to={`/article/${article.article_id}`} darkMode={darkMode} key={article.article_id}>
        <FlexBox>
            <CardImg src={article.article_img_url} alt=""/>
            <CardText>
                <User><p className='user-post'><i className="fa-solid fa-user"></i> {article.author}</p></User>
                <h2>{article.title}</h2>
                <p>{articleAge}</p>
            </CardText>
        </FlexBox>
    </LinkStyle>
<Actions>
<VoteButton article_id = {article.article_id} votes = {article.votes}/>
<Link to={`/article/${article.article_id}`}><CommentButton comments = {article.comment_count}/></Link>
    </Actions>
    </ArticleWrapper>
)}

export default ArticleCard