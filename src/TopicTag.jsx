import { Link } from "react-router-dom"

const TopicTag = ({topic}) => {
   return <Link to={`/articles/${topic}`}><button className='topic-tag'>{topic}</button>
   </Link>
}

export default TopicTag