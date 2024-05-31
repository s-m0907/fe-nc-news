import { useState } from "react"
import { patchVotes } from "../../services/api"
import styled from "styled-components"

const Button = styled.button`
border: none;
background: rgba(40, 40, 40, 0.1);
padding: 4px;
cursor: pointer;
`


const VoteButton = ({article_id, votes}) => {
   const [voteCount, setVoteCount] = useState(votes)
   const [isVoted, setIsVoted] = useState(false)

   const upVote = (article_id) => {
  patchVotes(article_id).catch((err) => {
     alert('Error: article could not be upvoted. Please try again.')
     console.log(err)
   })
}

const handleClick = () => {
   if (!isVoted) {
      upVote(article_id);
      setVoteCount(voteCount + 1);
   } else {
      setVoteCount(voteCount - 1);
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

export default VoteButton