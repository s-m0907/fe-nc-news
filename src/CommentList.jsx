import { useEffect } from "react"
import { useState } from "react"
import CommentCard from './CommentCard'
import { fetchComments } from '../api'

const CommentList = ({article_id}) => {
const [comments, setComments] = useState([])

useEffect(() => {
    fetchComments(article_id).then((comments) => {
        setComments(comments)
    })
}, [])

return <div className= 'comment-list'>
<h6>Comments</h6>
{comments.map((comment) => <CommentCard key = {comment.comment_id} comment = {comment}/>)}
</div>

}

export default CommentList