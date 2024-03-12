import './App.css';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ArticlesList } from './components/ArticlesList';


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<ArticlesList />}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
