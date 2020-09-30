import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';

const MyPosts = React.memo(props => {
  let postsElements = [...props.posts]
    .reverse()
    .map(p => (
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

  let onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h4>My posts</h4>

      <AddNewPostForm onSubmit={onAddPost} />

      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
