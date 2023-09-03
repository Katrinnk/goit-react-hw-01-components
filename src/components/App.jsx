import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/Statistics";
import { Friendlist } from "./friendlist/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import user from '../json/user.json'
import data from '../json/data.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'


export const App = () => {
  return (
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics 
      title={data.title}
      data={data}
      />
      <Friendlist
       friends={friends}
       />
       <TransactionHistory 
       transactions={transactions}
       />
     </div>
  );
};
