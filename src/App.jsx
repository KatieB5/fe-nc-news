import './App.css';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ArticlePage } from './components/ArticlePage';
import { SingleArticle } from './components/SingleArticle';
import { TopicsList } from './components/TopicList';
import {TopicSpecificArticlesList} from './components/TopicSpecificArticlesList';


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<ArticlePage />}/>
          <Route path="/ncnews/:article_id" element={<SingleArticle />} />
          <Route path="/ncnews/topics" element={<TopicsList/>} />
          <Route path="/ncnews/topics/:topic" element={<TopicSpecificArticlesList/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
