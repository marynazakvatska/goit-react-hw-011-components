
import PropTypes from 'prop-types';
import css from './Profile.module.css'

const Profile = ({ avatar, username, tag, location, stats }) => {
   const {followers, views, likes} = stats
    return (
        <div className={css.profile}>
            <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                    className={css.avatar}
                    width='360px'
            />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
        </div>

            <ul className={css.stats}>
            <li className={css.list_profile}>
                <span className={css.label}>Followers</span> <br/>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.list_profile}>
        
                <span className={css.label}>Views</span><br/>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.list_profile}>
                <span className={css.label}>Likes</span><br/>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
    )
}


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile