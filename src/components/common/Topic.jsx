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
  if(topic.hasOwnProperty('slug')) {
 return <TopicWrapper>
    <TopicTitle>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</TopicTitle>
    <TopicDescription/>
  </TopicWrapper>
  }
};

export default Topic;