import {
  List,
  PLocation,
  PName,
  ProfileDiv,
  PTag,
  SpanLabel,
  SpanQuantity,
  StatsUl,
} from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileDiv>
    <div>
      <img width="100%" src={avatar} alt="User avatar" />
      <PName>{username}</PName>
      <PTag>@{tag}</PTag>
      <PLocation>{location}</PLocation>
    </div>

    <StatsUl>
      <List>
        <SpanLabel>Followers</SpanLabel>
        <SpanQuantity>{stats.followers}</SpanQuantity>
      </List>
      <List>
        <SpanLabel>Views</SpanLabel>
        <SpanQuantity>{stats.views}</SpanQuantity>
      </List>
      <List>
        <SpanLabel>Likes</SpanLabel>
        <SpanQuantity>{stats.likes}</SpanQuantity>
      </List>
    </StatsUl>
  </ProfileDiv>
);
