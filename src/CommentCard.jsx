import { convertTimestampToDate, timeSince } from "../utils/timeSince"
import VoteButton from "./VoteButton"

const CommentCard = ({comment}) => {
    const date = convertTimestampToDate(comment.created_at)
    const commentAge = timeSince(date)
    return (<div className = 'comment-card'>
    <div className='top-line'><p className='user-post'><i className="fa-solid fa-user"></i> {comment.author}</p><p>{commentAge}</p></div>
    <p>{comment.body}</p>
    <VoteButton votes = {comment.votes}/>
    </div>)
}

export default CommentCard