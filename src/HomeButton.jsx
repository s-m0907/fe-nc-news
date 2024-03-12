import {Link} from 'react-router-dom'
import styled from "styled-components";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white"
}

const HomeButton = () => {
    return <>
    <Link to = "/" style={linkStyle}>
    <i className="fa-regular fa-newspaper fa-2xl"></i>
    </Link>
    </>
}

export default HomeButton