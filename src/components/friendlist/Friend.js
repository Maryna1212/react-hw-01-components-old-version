import PropTypes from 'prop-types';
import f from './FriendList.module.css';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={f.item}>
      <span className={f.status}>{isOnline}</span>
      <img className={f.avatar} src={avatar} alt="" width="48" />
      <p className={f.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
