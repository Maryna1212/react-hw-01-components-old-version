import PropTypes from 'prop-types';
import Friend from './Friend';
import f from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={f.friendList}>
      <Friend friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
