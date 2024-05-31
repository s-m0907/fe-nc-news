import { patchCommentVotes } from '../../services/api'
import { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
border: none;
background: rgba(40, 40, 40, 0.1);
padding: 4px;
cursor: pointer;

${props =>
   props.darkMode &&
   css`
     border-color: #ffffff;
   `}
`


const CommentVoteButton = ({votes, comment}) => {
   const[voteCount, setVoteCount] = useState(votes)
   const[isVoted, setIsVoted] = useState(false)

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

   return <Button
   onClick = {() => {
      handleClick();
      
   }}>
      <i className={isVoted ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> {voteCount}
      </Button>
}

export default CommentVoteButton