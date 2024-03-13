import LoggedIn from "./LoggedIn"
import Nav from "./Nav"
import { useContext } from "react"
import UserContext from "../contexts/User"
import {Link} from 'react-router-dom'
import styled from "styled-components"

const linkStyle = {
    textDecoration: "none",
    color: "white"
}


const Header = () => {
    const {loggedInUser} = useContext(UserContext)
    return <header>
    <LoggedIn loggedInUser = {loggedInUser}/>
    <Link to='/' style={linkStyle}><h1>NC News  <i className="fa-regular fa-newspaper fa-lg"/>  </h1></Link>
    <Nav/>
    </header>
}

export default Header