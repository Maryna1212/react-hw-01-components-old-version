import PropTypes from 'prop-types';
import p from './Profile.module.css';
import './default-avatar.jpg';

export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={p.profile}>
      <div className={p.description}>
        <img src={avatar} alt="Аватар пользователя" className={p.avatar} />
        <p className={p.name}>{name}</p>
        <p className={p.tag}>{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li>
          <span className={p.label}>Followers</span>
          <span className={p.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
