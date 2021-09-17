import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <li key={friend.id}>
        <Friend
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
