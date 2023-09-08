import {
  ItemFriendList,
  PNameFriendList,
  StatusFriendlist,
} from './friendlist.styled';

export const FriendlistItem = ({ avatar, name, $isOnline }) => {
  return (
    <ItemFriendList>
      <StatusFriendlist isOnline={$isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <PNameFriendList>{name}</PNameFriendList>
    </ItemFriendList>
  );
};
