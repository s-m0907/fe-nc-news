import { useContext, useState } from "react"
import { convertTimestampToDate, timeSince } from "../utils/timeSince"
import CommentVoteButton from "./CommentVoteButton"
import UserContext from "../contexts/User"
import styled from "styled-components"
import DeleteButton from "./DeleteButton"

const Wrapper = styled.div`
display: flex;
column-gap: 5px; 
`
const MessageText = styled.p`
font-weight: bold;
color: #BF4F74;
`

const CommentCard = ({comment}) => {
    const {loggedInUser} = useContext(UserContext)
    const date = convertTimestampToDate(comment.created_at)
    const commentAge = timeSince(date)
    const [isDeleted, setIsDeleted] = useState(false)

    if(isDeleted) {
        return <div className = 'comment-card'>
            <MessageText><i className="fa-regular fa-square-minus"></i> Comment deleted</MessageText>
            </div>
    } else {
        return <div className = 'comment-card'>
    <div className='top-line'><p className='user-post'><i className="fa-solid fa-user"></i> {comment.author}</p><p>{commentAge}</p></div>
    <p>{comment.body}</p>
    <Wrapper><CommentVoteButton votes = {comment.votes}/>
    {comment.author === loggedInUser.username ? <DeleteButton comment_id = {comment.comment_id} setIsDeleted = {setIsDeleted}/> : <p></p>}
    </Wrapper></div>
    }
}

export default CommentCard