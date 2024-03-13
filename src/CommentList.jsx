import { useEffect } from "react"
import { useState } from "react"
import { fetchComments } from '../api'
import CommentCard from './CommentCard'
import Loading from "./Loading"

const CommentList = ({article_id}) => {
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    fetchComments(article_id).then((comments) => {
        setComments(comments)
        setIsLoading(false)
    })
}, [])

if(isLoading) return <Loading/>
    else {
return <div className= 'comment-list'>
<h6>Comments</h6>
{comments.map((comment) => <CommentCard key = {comment.comment_id} comment = {comment}/>)}
</div>}
}

export default CommentList