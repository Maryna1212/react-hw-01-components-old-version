import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
