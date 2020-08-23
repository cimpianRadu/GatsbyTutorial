import React from 'react';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0;
        padding-bottom: 1rem;
        display: flex;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
            }
          `}
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
      </Link>
      <div>
        <h2>
          <Link to={post.slug}> {post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
      </div>
    </article>
  );
};

export default PostPreview;
