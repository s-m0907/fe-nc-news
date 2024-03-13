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

   const upVote = (article_id) => {
  patchVotes(article_id).catch((err) => {
     alert('Error: article could not be upvoted. Please try again.')
     console.log(err)
   })
}

const handleClick = () => {
   console.log('clicked')
   return upVote(article_id)
}

   return <button
   onClick = {() => {
      setVoteCount(voteCount+1)
      handleClick();
      setStyle(likedStyle)
   }} style = {style}>
      <i className="fa-solid fa-heart"></i> {voteCount}</button>
}

export default VoteButton