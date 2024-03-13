import {Link} from 'react-router-dom'
import styled from "styled-components";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexDirection: "row",
    columnGap: "8px",
    alignItems: "center"
}

const LoggedIn = ({loggedInUser}) => {
    return <>
    <Link to = "/profile" style={linkStyle}>
    <i className="fa-regular fa-user fa-2xl"/>{loggedInUser.username}
    </Link>
    </>
}

export default LoggedIn