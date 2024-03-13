import UserContext from "../contexts/User"
import { useContext } from "react"


const UserCard = () => {
    const { loggedInUser } = useContext(UserContext)
return <div className ='user-card'>
<h2>{loggedInUser.username}</h2>
<img src={loggedInUser.avatar_url} alt="Profile picture for logged in user"></img>
</div>
}

export default UserCard