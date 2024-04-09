import styled from 'styled-components';

const TopicWrapper = styled.div`
position: absolute;
right: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 2px;
  background-color: #e0d2d2;
  text-align: center;
  width: 20%;
  `;
  
  const TopicTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: normal;
`;

const TopicDescription = styled.p`
  font-size: 16px;
  color: #333;
`;

const Topic = ({ topic }) => {
  if(topic) {
 return <TopicWrapper>
    <TopicTitle>{topic.charAt(0).toUpperCase() + topic.slice(1)}</TopicTitle>
    <TopicDescription>{topic.description}</TopicDescription>
  </TopicWrapper>
  }
};

export default Topic;