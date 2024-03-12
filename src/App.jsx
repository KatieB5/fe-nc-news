import './App.css';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ArticlesList } from './components/ArticlesList';
import { SingleArticle } from './components/SingleArticle';


function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<ArticlesList />}/>
          <Route path="/ncnews/:article_id" element={<SingleArticle />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
