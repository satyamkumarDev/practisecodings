// pages/index.js
import React from 'react';
import Header from 'src/component/Header';
import Post from 'src/component/posts';
import { getLatestPosts } from './lib/api';

const HomePage = ({ latestPosts }) => {
  return (
    <div>
      <Header />
      <h1>Welcome to my blog!</h1>
      <section>
        {latestPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const latestPosts = await getLatestPosts();
  return {
    props: {
      latestPosts
    }
  };
}

export default HomePage;
