import React from 'react';
import styles from './Post.module.css';
import userPhoto from '../../../../assets/images/user.png';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={userPhoto} alt="" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
