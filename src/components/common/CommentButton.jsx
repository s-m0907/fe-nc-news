import styled from "styled-components";

const Button = styled.button`
border: none;
background: rgba(40, 40, 40, 0.1);
padding: 4px;
cursor: pointer;
`

const CommentButton = ({comments}) => {

    const handleCommentButtonClick = () => {
        const commentsComponent = document.getElementById('comments');
        if (commentsComponent) {
            commentsComponent.scrollIntoView({ behavior: 'smooth' });
    }
}

return <Button onClick={handleCommentButtonClick}> <i className="fa-regular fa-comment"></i> {comments} Comments</Button>
}

export default CommentButton