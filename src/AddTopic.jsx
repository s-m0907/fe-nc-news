import styled from 'styled-components'
import { useState } from 'react';
import TopicForm from './TopicForm';

const Add = styled.button`
border: none;
border-radius: 20px;
padding: 6px;
margin-left: 8px;
background: #BF4F74;
color: whitesmoke;
padding-right: 8px;
`

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const AddTopic = ({setNewTopic})=> {
    const [isOpen, setIsOpen] = useState(false);

return <Container>
<Add onClick={() => setIsOpen(!isOpen)}>
    <i className="fa-solid fa-plus"></i>
    {isOpen ? '' : ' New Topic'}
    </Add>
    {isOpen && (
        <TopicForm setIsOpen={setIsOpen} setNewTopic={setNewTopic}/>
      )}
    </Container>
}

export default AddTopic