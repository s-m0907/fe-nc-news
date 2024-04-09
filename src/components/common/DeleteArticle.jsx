import styled from "styled-components";
import { deleteArticle } from "../../services/api";
import { useState } from "react";

const Button = styled.button`
  color: #c70000;
  font-weight: bold;
`;
const DeleteArticle = ({article_id, setIsDeleted}) => {
      const [isDisabled, setIsDisabled] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
    
      function handleClick() {
        setIsLoading(true)
        setIsDisabled(true)
        if (confirm("Are you sure you want to permanently delete this article?")) {
            deleteArticle(article_id)
            .then((response) => {
                setIsDeleted(true);
              return response.status;
            })
            .catch(() => {
              alert("Error: article could not be deleted")
            });
          }
          setIsDisabled(false)
      }
    if(isLoading){
      return <p>...</p>
    } else {
      return (
        <Button type="button" id="deleteComment" onClick={handleClick} disabled={isDisabled}>
          <i className="fa-solid fa-trash" />
        </Button>
      );
    };
    }

export default DeleteArticle