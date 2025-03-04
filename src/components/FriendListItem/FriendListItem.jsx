import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css'


export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendListItem}>
      
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.online}>{isOnline ? "Online" : <span className={styles.offline}>"Offline"</span>}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
