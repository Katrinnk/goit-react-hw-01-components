import { FriendList } from "./friendlist-style";
import { ItemFriendList } from "./itemFriendList-style";
import { PNameFriendList } from "./pNameFrieandList-style";
import { StatusFriendlist } from "./statusFriendList-style";

export const Friendlist = ({friends}) => (
    <FriendList className="friend-list">
        {friends.map( friend => (
            <ItemFriendList className="item" key={friend.id}>
                <StatusFriendlist isOnline={friend.isOnline} className="status"></StatusFriendlist>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <PNameFriendList className="name">{friend.name}</PNameFriendList>
            </ItemFriendList>
        ))}
    </FriendList>
)