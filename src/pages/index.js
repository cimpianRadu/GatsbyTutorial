import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';

import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h1>Hello Frontend Masters!</h1>
        <Link to="/about">Check about me &rarr;</Link>

        <h3>Read my posts</h3>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}

        <Insta />
      </Layout>
    </>
  );
};
