import UserContext from "../contexts/User"
import { useContext } from "react"
import styled, {css} from "styled-components"
import DarkModeToggle from "./ToggleDarkModeButton"
import { Link } from "react-router-dom"
import { useDarkMode } from '../contexts/DarkMode.jsx'

const UserWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
border: solid black 4px;
max-width: 100%;
row-gap: 6px;
align-items: start;
color: #BF4F74;
margin: 40px;
padding: 30px;
border-radius: 30px;

${props =>
    props.darkMode &&
    css`
      border-color: #ffffff;
    `}
`

const UserImg = styled.img`
width: 200px;
`
const SignOut = styled.button`
position: absolute;
bottom: 0;
left: 30px;
width: 100px;
border: 3px solid #BF4F74;
font-size: 1rem;
margin-bottom: 20px;
border-radius: 10px;
padding: 2px;
`

const Settings = styled.div`
display: flex;
flex-direction: column;
`

const UserDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const UserCard = () => {
    const { loggedInUser } = useContext(UserContext)
    const { darkMode } = useDarkMode()

return <UserWrapper darkMode={darkMode}>
    <UserDetails>
<UserImg src={loggedInUser.avatar_url} alt="Profile picture for logged in user"></UserImg>
<h2>{loggedInUser.username}</h2>
    </UserDetails>
<Settings>
<DarkModeToggle/>
<Link to='/articles'>
<SignOut>Sign Out</SignOut>
</Link>
</Settings>
</UserWrapper>
}

export default UserCard