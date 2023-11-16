import React from 'react';
import css from './css/PostItem.module.css'

function PostItem(props) {
  return (
        props.savedPosts.map((post) => (
        <div className="css.SearchItem" key={post.title}>
        <h2>Title: {post.title}</h2>
        <p>Artist: {post.name}</p>
        <img src={post.image} alt="Image description" />
        <p>Description: {post.description}</p>
        </div>
        ))
  )
}

export default PostItem