import UserCard from "./UserCard"
import ArticleList from "./ArticleList"
import UserContext from "../contexts/User"
import { useContext } from "react"

const Profile =  () => {
    const { loggedInUser } = useContext(UserContext)
return <>
<UserCard/>
<h3>Your Articles</h3>
<ArticleList user = {loggedInUser.username}/>
</>
}

export default Profile