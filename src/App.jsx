import './App.css'
import {Routes, Route} from 'react-router-dom'
import ArticleList from './ArticleList.jsx'
import Header from './Header.jsx' 
import Home from './Home'
import SingleArticle from './SingleArticle.jsx'
import UserContext from '../contexts/User.jsx'
import { useState } from 'react'
import Profile from './Profile.jsx'
import ErrorPage from './ErrorPage.jsx'


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'jessjelly',
    name: 'jess',
    avatar_url: 'user_2102633.png'
  })

  return (
    <UserContext.Provider value = {{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
  <Header/>
  <Routes>
    <Route path="*" element={<ErrorPage/>} />
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/articles' element={<ArticleList/>}/>
    <Route path = '/articles/:topic' element={<ArticleList/>}/>
    <Route path = '/article/:article_id' element={<SingleArticle/>}/>
    <Route path = '/profile' element={<Profile/>}/>

  </Routes>
    </UserContext.Provider>
  )
}

export default App
