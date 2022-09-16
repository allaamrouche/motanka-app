import React from 'react';

import Post from '../../components/post/Post';

import './Posts.css';

export default function Posts() {
    return (
        <section className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
    )
}