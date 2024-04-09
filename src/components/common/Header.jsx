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

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-grow: 1;
    margin-left: 15px;
    margin-right: 15px;
    `

const SearchInput = styled.input`
    flex-grow: 1;
    padding: 8px 30px 8px 10px;
    border: none;
    border-radius: 4px;
    width: 60%;
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #aaa;
`;

const PostArticleButton = styled.button`
    padding: 8px 16px;
    background-color: #BF4F74;
    color: white;
    border: none;
    border-radius: 40px;
    cursor: pointer;
`;

const Header = () => {
    const { loggedInUser } = useContext(UserContext);

    const handleSearchChange = (event) => {
        console.log(`Search input changed: ${event.target.value}`);
    };


    return (
        <header>
            <LoggedIn loggedInUser={loggedInUser} />
            <Link to='/' style={linkStyle}>
                <h2><i className="fa-regular fa-newspaper fa-normal"/> NC News
                </h2>
            </Link>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                />
                {/* Include the search icon */}
                <SearchIcon><i className="fa-solid fa-magnifying-glass"></i></SearchIcon>
            </SearchContainer>
            <Link to='/create-post'><PostArticleButton>
            <i className="fa-solid fa-plus"/>
            </PostArticleButton>
            </Link>
            <Nav />
            {/* Include the search bar component */}
        </header>
    );
};

export default Header;