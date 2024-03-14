import {Link} from 'react-router-dom'
import styled from "styled-components";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexDirection: "row",
    columnGap: "8px",
    alignItems: "center",
    fontWeight: "bold"
}

const LoggedIn = ({loggedInUser}) => {
    return <>
    <Link to = "/profile" style={linkStyle}>
    <i className="fa-regular fa-user fa-xl"/>{loggedInUser.username}
    </Link>
    </>
}

export default LoggedIn