import styled, {css} from 'styled-components'
import { useState } from 'react';
import { postTopic } from '../../services/api';
import { useDarkMode } from '../../../contexts/DarkMode.jsx'

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 95%;
    padding: 8px;
    margin-right:20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 7px;
  }

  button {
    display: block;
    width: 30%;
    padding: 10px;
    background-color: #DE2B67;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 17px;
  }

  button:hover {
    background-color: #bc315f;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-bottom: 20px
}
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  ${props =>
    props.darkMode &&
    css`
      color: whitesmoke;
      background-color: #1f1f1f
    `}
`;

const ModalText = styled.p`
  margin: 0;
  margin-bottom: 10px
`;

const CloseButton = styled.button`
position: absolute;
font-size: 20px;
background: none;
border: none;
margin-left: -44px;
margin-top: -44px;
color: whitesmoke;
cursor: pointer;
`

const TopicForm = ({setIsOpen, setNewTopic})=> {
  const { darkMode } = useDarkMode()
  const [formData, setFormData] = useState({
    slug: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const handleClick = () => {
    submitForm();
  };

  const submitForm = () => {
    postTopic(formData)
      .then(() => {
        setNewTopic(formData.slug)
        setFormData({
          slug: '',
          description: '',
        });
        setIsOpen(false);
        console.log('Topic submitted');
      })
      .catch((error) => {
        console.error('Error submitting form:', error.message);
        // Handle error as needed
      });
  };

  const handleClose = () => {
    setIsOpen(false)
  }
  

return <ModalOverlay>
        <ModalContent darkMode={darkMode}>
        <CloseButton onClick={handleClose}><i className="fa-solid fa-xmark"></i></CloseButton>
          <ModalText>Create a new topic</ModalText>
          <Divider></Divider>
        <Form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="button" onClick={handleClick}>Submit</button>
        </Form>
        </ModalContent>
        </ModalOverlay>
}

export default TopicForm