import { useContext } from "react"
import { Link } from 'react-router-dom'
import UserContext from "../contexts/User"
import styled from "styled-components"
import LoggedIn from "./LoggedIn"
import Nav from "./Nav"

const linkStyle = {
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexWrap: "nowrap"
}


const Header = () => {
    const {loggedInUser} = useContext(UserContext)
    return <header>
    <LoggedIn loggedInUser = {loggedInUser}/>
    <Link to='/' style={linkStyle}><h1>NC News  <i className="fa-regular fa-newspaper fa-normal"/>  </h1></Link>
    <Nav/>
    </header>
}

export default Header