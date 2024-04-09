import { useEffect } from "react"
import { useState } from "react"
import { fetchComments } from '../services/api'
import CommentCard from '../components/ui/CommentCard'
import Loading from "../components/common/Loading"
import CommentForm from "../components/forms/CommentForm"

const CommentList = ({article_id}) => {
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    fetchComments(article_id).then((comments) => {
        setComments(comments)
      })
      setIsLoading(false)
}, [])

return (
    <div className='comment-list'>
      <CommentForm setComments={setComments} />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {comments.length === 0 ? <h4>No Comments Yet</h4> : <h4>Comments</h4>}          
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList