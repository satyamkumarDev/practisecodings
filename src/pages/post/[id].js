// pages/post/[id].js
import React from 'react';
import { getPostById } from '../lib/api';
import Header from 'src/component/Header';
import Post from 'src/component/posts';

const PostPage = ({ post }) => {
  return (
    <div>
      <Header />
      <Post post={post} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const post = await getPostById(id);
  return {
    props: {
      post
    }
  };
}

export default PostPage;
