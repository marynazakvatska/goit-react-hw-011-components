import Profile from "./Profile/Profile";
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import transactions from '../transactions.json'
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendList/FriendsList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
stats={user.stats}
      />
      
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
    <FriendsList friends={friends} />
     <TransactionHistory items={transactions} />
    </div>
  );
};
