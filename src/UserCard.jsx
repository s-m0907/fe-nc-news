import UserContext from "../contexts/User"
import { useContext } from "react"
import styled from "styled-components"

const SignOut = styled.button`
position: absolute;
bottom: 0;
width: 100px;
border: 3px solid #BF4F74;;
font-size: 1rem;
margin-bottom: 20px;
border-radius: 10px;
padding: 2px;
`

const UserCard = () => {
    const { loggedInUser } = useContext(UserContext)
return <div className ='user-card'>
<h2>{loggedInUser.username}</h2>
<img src={loggedInUser.avatar_url} alt="Profile picture for logged in user"></img>
<SignOut>Sign Out</SignOut>
</div>
}

export default UserCard