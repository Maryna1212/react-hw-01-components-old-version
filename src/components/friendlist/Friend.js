import PropTypes from 'prop-types';
import f from './FriendList.module.css';

function Friend({ friends }) {
  return friends.map(friend => (
    <li key={friend.id} className={f.item}>
      {friend.isOnline ? (
        <span className={f.online}>⊕</span>
      ) : (
        <span className={f.offline}>⊖</span>
      )}
      <img
        className={f.avatar}
        src={friend.avatar}
        alt="avatar of user"
        width="48"
      />
      <p>{friend.name}</p>
    </li>
  ));
}

Friend.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default Friend;
