const CommentButton = ({comments}) => {

    const handleCommentButtonClick = () => {
        const commentsComponent = document.getElementById('comments');
        if (commentsComponent) {
            commentsComponent.scrollIntoView({ behavior: 'smooth' });
    }
}

return <button onClick={handleCommentButtonClick}> <i className="fa-regular fa-comment"></i> {comments}</button>
}

export default CommentButton