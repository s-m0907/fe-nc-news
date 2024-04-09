import { useContext } from "react"
import UserContext from "../../../contexts/User"
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import { fetchTopics, postArticle } from "../../services/api";
import AddTopic from "../common/AddTopic";

const FormContainer = styled.form`
  max-width: 400px;
  margin: auto;
  padding-top: 20px;
`;

const TopicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
` 

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const BodyInput = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 150px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30%;
  height:40px;
  margin-right: 10px;
`;

const ErrorMessage = styled.span`
  color: #BF4F74;
  font-size: 14px;
`;

const SuccessMessage = styled.div`
  color: green;
  font-size: 16px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: #BF4F74;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #bc315f;
  }
`;
  
  const ArticleForm = () => {
    const [topics, setTopics] = useState([])
    const { loggedInUser } = useContext(UserContext)
    const [isSuccess, setIsSuccess] = useState(false)
    const [newTopic, setNewTopic] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      
    
      const onSubmit = (data) => {
        data.author = loggedInUser.username;
        postArticle(data)
            .then((response) => {
                console.log('Article posted successfully:', response);
                setIsSuccess(true)
                reset()
            })
            .catch((error) => {
                console.error('Error posting article:', error);
            });
    };

      useEffect(() => {
        fetchTopics().then((result)=> {
            setTopics(result)
        })
      }, [newTopic])
    
      return (
        
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h3>Create a post:</h3>
        <FormGroup>
          <TopicWrapper>
          <Label htmlFor="topic"></Label>
          <Select id="topic" {...register("topic", { required: true })}>
            {topics.map((topic) => (
              <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
            ))}
          </Select>
          <AddTopic setNewTopic={setNewTopic}/>
          </TopicWrapper>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="title"></Label>
          <Input id="title" placeholder="Title" {...register("title", { required: true })} />
          {errors.title && <ErrorMessage>This field is required</ErrorMessage>}
        </FormGroup>
  
        <FormGroup>
          <Label htmlFor="body"></Label>
          <BodyInput id="body" placeholder="Text" {...register("body", { required: true })} />
          {errors.body && <ErrorMessage>This field is required</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="article_image_url"></Label>
          <Input id="article_img_url" type="url" {...register("article_img_url")} placeholder="Image URL" />
        </FormGroup>
        {isSuccess && <SuccessMessage>Article posted!</SuccessMessage>}
  
        <SubmitButton type="submit">Post</SubmitButton>
      </FormContainer>
    );
  }

export default ArticleForm