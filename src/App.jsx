import './App.css'
import {Routes, Route} from 'react-router-dom'
import Feed from './components/pages/Feed.jsx'
import Header from './components/common/Header.jsx' 
import Home from './components/pages/Home.jsx'
import SingleArticle from './components/pages/SingleArticle.jsx'
import UserContext from '../contexts/User.jsx'
import { useState, useEffect } from 'react'
import Profile from './components/pages/Profile.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx'
import { useDarkMode } from '../contexts/DarkMode.jsx'
import ArticleForm from './components/forms/ArticleForm.jsx'

function App() {
  const [loggedInUser, setLoggedInUser] = useState( {
    username: 'weegembump',
    name: 'Gemma Bump',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553'
  })

  const { darkMode } = useDarkMode()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <UserContext.Provider value = {{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
  <Header/>
  <Routes>
    <Route path="*" element={<ErrorPage/>} />
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/articles' element={<Feed/>}/>
    <Route path = '/articles/:topic' element={<Feed/>}/>
    <Route path = '/article/:article_id' element={<SingleArticle/>}/>
    <Route path = '/create-post' element={<ArticleForm/>}/>
    <Route path = '/profile' element={<Profile/>}/>
  </Routes>
    </UserContext.Provider>
  )
}

export default App
