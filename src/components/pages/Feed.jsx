import ArticleList from "../../containers/ArticleList"
import { fetchTopics } from "../../services/api"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

const Feed = () => {
    const { topic } = useParams()
    const [currentTopic, setCurrentTopic] = useState({})
    const [isTopic, setIsTopic] = useState(false)

    useEffect(() => {
        if(topic) {
            fetchTopics().then((topics) => {
                return topics.filter(arrTopic => arrTopic.slug === topic)
            }
            ).then((result) => {
                const [topicObject] = result
                setCurrentTopic(topicObject)
                setIsTopic(true)
            })
        } else{
            setIsTopic(false)
            setCurrentTopic({})
        }
    }, [topic])

return <>
<ArticleList currentTopic = {currentTopic} isTopic = {isTopic}/>
</>
}

export default Feed