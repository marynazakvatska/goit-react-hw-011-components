import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'


export default function FriendsList({ friends }) {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                     <FriendListItem
                    key={friend.id}
                     id={friend.id}
                    name={friend.name}
                    isOnline={friend.isOnline }
                    avatar={friend.avatar}
                />
              
            ))}
</ul>
    )

}

FriendsList.propTypes = {
   friends: PropTypes.array
}