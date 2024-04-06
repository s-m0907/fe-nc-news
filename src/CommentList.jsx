import { useEffect } from "react"
import { useState } from "react"
import { fetchComments } from '../api'
import CommentCard from './CommentCard'
import Loading from "./Loading"
import CommentForm from "./CommentForm"

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

return (
    <div className='comment-list'>
      <CommentForm setComments={setComments} />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h4>Comments</h4>
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList