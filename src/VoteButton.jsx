import { useState } from "react"
import { patchVotes } from "../api"
import styled from "styled-components"

const likedStyle = {
   background: "black",
   color: "white"
}

const VoteButton = ({article_id, votes}) => {
   const [voteCount, setVoteCount] = useState(votes)
   const [style, setStyle] = useState({})
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

   return <button
   onClick = {() => {
      handleClick();
      
   }} style = {style}>
      <i className={isVoted ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> {voteCount}
      </button>
}

export default VoteButton