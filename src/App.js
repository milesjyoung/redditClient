import { useEffect, useState } from 'react';
import Banner from './components/banner/Banner';
import PostsContainer from './components/postsContainer/PostsContainer';
import SubredditsContainer from './components/subreddits/SubredditsContainer';
import './App.css'
import { useSelector } from 'react-redux';
import Modal from './components/modal/Modal';

function App() {

  const {modalOpen, posts} = useSelector(state => state.posts)

  return (
    <div className='main-app'>
      <Banner />
      <div className='main-section-container'>
        <SubredditsContainer />
        <PostsContainer />
      </div>
      {modalOpen && <Modal post={posts.find(post => post.displayComments === true) || null} />}
    </div>
  );
}

export default App;
