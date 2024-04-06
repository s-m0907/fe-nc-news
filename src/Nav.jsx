import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchTopics } from '../api';
import styled from 'styled-components';

const linkStyle = {
  fontSize: "1rem",
  backgroundColor: "white",
  borderBottom: "2px solid gray"
}

const postStyle = {
  backgroundColor: "#f2c6d5",
  fontWeight: "bold"
}

const Nav = () => {
const [topics, setTopics] = useState([])

useEffect(() => {
  fetchTopics().then((data) => {
    setTopics(data)
})
},[])

  return (
    <div className="dropdown">
      <div className="dropbtn"><i className="fa-solid fa-bars"></i></div>
      <div className="dropdown-content">
        <Link to = "/articles"> Articles </Link>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/${topic.slug}`} value={topic.slug} style={linkStyle}>
              {topic.slug[0].toUpperCase()}{topic.slug.slice(1)}
            </Link>)})}
        <Link to = "/profile"> Profile </Link>
        <Link to ="/create-post" style={postStyle}>Create a post</Link>
      </div>
    </div>
  );
};

export default Nav