// pages/post/[id].js
import React from 'react';

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Supondo que você tenha uma função que busca o post pelo ID
  const post = await getPost(params.id);

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
