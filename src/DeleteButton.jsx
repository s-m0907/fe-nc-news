import styled from "styled-components";
import { deleteComment } from "../api";
import { useState } from "react";

const Button = styled.button`
  color: #c70000;
  font-weight: bold;
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
          return response.status;
        })
        .catch(() => {
          alert("Error: comment could not be deleted")
        });
      }
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
