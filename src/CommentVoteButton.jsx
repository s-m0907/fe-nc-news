import { patchCommentVotes } from "../api"
import { useState } from 'react'

const CommentVoteButton = ({votes, comment}) => {
   const[voteCount, setVoteCount] = useState(votes)
   const[isVoted, setIsVoted] = useState(false)

   console.log(comment)

   const comment_id = comment.comment_id

   const upVote = (comment_id) => {
  patchCommentVotes(comment_id, 1).catch((err) => {
     alert('Error: article could not be upvoted. Please try again.')
     console.log(err)
   })
}

const downVote = (comment_id) => {
   patchCommentVotes(comment_id, -1).catch((err) => {
      alert('Error: article could not be upvoted. Please try again.')
      console.log(err)
    })
 }

const handleClick = () => {
   if (!isVoted) {
      upVote(comment_id);
      setVoteCount(voteCount + 1);
   } else {
      setVoteCount(voteCount - 1);
      downVote(comment_id)
   }
   setIsVoted(!isVoted);
};

   return <button
   onClick = {() => {
      handleClick();
      
   }}>
      <i className={isVoted ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> {voteCount}
      </button>
}

export default CommentVoteButton