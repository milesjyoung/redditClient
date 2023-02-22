import { useEffect, useState } from 'react';
import Banner from './components/banner/Banner';
import PostsContainer from './components/postsContainer/PostsContainer';
import SubredditsContainer from './components/subreddits/SubredditsContainer';
import './App.css'

function App() {


  return (
    <div className='main-app'>
      <Banner />
      <div className='main-section-container'>
        <SubredditsContainer />
        <PostsContainer />
      </div>

    </div>
  );
}

export default App;
