import PropTypes from 'prop-types';
import css from './FriendListItel.module.css'

export default function FriendListItem({ id, isOnline, name, avatar }) {
    return (
        <li className={css.item} key={id}>

{isOnline ? <span className={css.statuson}>{isOnline}</span> : <span className={css.status}>{isOnline}</span>}


            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    
}

