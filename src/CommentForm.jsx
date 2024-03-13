import styled from 'styled-components'
import { useState } from 'react';
import { postComment } from '../api';
import UserContext from '../contexts/User';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Form = styled.form`
display: flex;
flex-direction: column;
row-gap: 10px;
align-items: start;
color: #BF4F74;
margin-bottom: 40px;
margin-top: 25px;
max-width: 100%;
`;

const CommentForm = ({setComments}) => {
    const {loggedInUser} = useContext(UserContext)
    const [input, setInput] = useState('')
    const [postSuccess, setPostSuccess] = useState(false)

    const { article_id } = useParams()

    const user = loggedInUser.username

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(user, input, article_id).then((commentFromApi) => {
                setComments((currComments) => {
                    setPostSuccess(true)
                    return [commentFromApi, ...currComments]
                })        
        }).catch(() => {
            alert('Error: could not post comment. Please try again.')
        })
        console.log('submitted')
    }

return <>
    <Form onSubmit={handleSubmit}>
            <label htmlFor="comment">Add a comment: </label>
            <textarea rows="5" cols="50" id="comment" value= {input} onChange={handleInputChange} name="comment" required/>
            <button type="submit">Post Comment</button> {postSuccess ? <p>Comment posted!</p> : <p></p>}
            </Form>
</>
}

export default CommentForm