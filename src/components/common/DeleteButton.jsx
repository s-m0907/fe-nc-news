import styled from "styled-components";
import { deleteComment } from "../../services/api";
import { useState } from "react";

const Button = styled.button`
  color: #c70000;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background: rgba(0,0,0,0);
`;
const DeleteButton = ({ comment_id, setIsDeleted }) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handleClick() {
    setIsLoading(true)
    setIsDisabled(true)
    if (confirm("Are you sure you want to permanently delete this comment?")) {
      deleteComment(comment_id)
      .then((response) => {
          setIsDeleted(true);
          console.log('Comment deleted')
          return response.status;
        })
        .catch(() => {
          alert("Error: comment could not be deleted")
        });
      }
      setIsLoading(false)
      setIsDisabled(false)
  }
if(isLoading){
  return <p>...</p>
} else {
  return (
    <Button type="button" id="deleteComment" onClick={handleClick} disabled={isDisabled}>
      <i className="fa-solid fa-trash" /> Delete
    </Button>
  );
};
}

export default DeleteButton;
