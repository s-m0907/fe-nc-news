import { useContext } from "react";
import { Link } from 'react-router-dom';
import UserContext from "../../../contexts/User";
import styled from "styled-components";
import LoggedIn from "./LoggedIn";
import Nav from "./Nav";

const linkStyle = {
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexWrap: "nowrap"
};

const PostArticleButton = styled.button`
    padding: 8px 10px;
    background-color: #DE2B67;
    color: white;
    border: none;
    border-radius: 40px;
    cursor: pointer;
`;

const LeftContainer = styled.div`
display: flex;
justify-content: grow;
`
const RightContainer = styled.div`
display: flex;
justify-content: end;
align-items: center;
`


const Header = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <header>
            <LeftContainer>
            <LoggedIn loggedInUser={loggedInUser} />
            </LeftContainer>
            <Link to='/' style={linkStyle} value='Home'>
                <h2>NC News <i className="fa-regular fa-newspaper fa-normal"/>
                </h2>
            </Link>
            <RightContainer>
            <Link to='/create-post' aria-label="Create a new post"><PostArticleButton aria-label="New post" target="create a post">
            <i className="fa-solid fa-plus"/>
            </PostArticleButton>
            </Link>
            <Nav />
            </RightContainer>
        </header>
    );
};

export default Header;