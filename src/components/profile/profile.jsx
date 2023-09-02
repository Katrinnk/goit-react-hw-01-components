import { List, ProfileDiv, StatsUl } from "./profile-styles";

export const Profile = ({username, tag, location, avatar, stats}) => (
    <ProfileDiv class="profile">
  <div class="description">
    <img
        width='80%'
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <StatsUl class="stats">
    <List>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </List>
    <List>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </List>
    <List>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </List>
  </StatsUl>
</ProfileDiv>
)