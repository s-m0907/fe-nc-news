import './App.css'
import {Routes, Route} from 'react-router-dom'
import ArticleList from './ArticleList.jsx'
import Header from './Header.jsx' 
import Home from './Home'

function App() {

  return (
    <>
  <Header/>
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = 'articles' element={<ArticleList/>}/>
  </Routes>
    </>
  )
}

export default App
