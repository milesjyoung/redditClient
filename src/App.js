import { useEffect, useState } from 'react';
import Banner from './components/banner/Banner';
import PostsContainer from './components/postsContainer/PostsContainer';

function App() {


  return (
    <div className='main-app'>
      <Banner />
      <PostsContainer />

    </div>
  );
}

export default App;
