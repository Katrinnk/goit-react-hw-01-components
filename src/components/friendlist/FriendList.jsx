import { FriendList } from './friendlist.styled';
import { FriendlistItem } from './FriendListItem';

export const Friendlist = ({ friends }) => (
  <FriendList>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendlistItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </FriendList>
);
