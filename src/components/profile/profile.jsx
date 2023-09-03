import { List } from "./list-style";
import { PLocation } from "./pLocation-style";
import { PName } from "./pName-style";
import { ProfileDiv } from "./profileDiv-style";
import { PTag } from "./pTag-style";
import { SpanLabel } from "./spanLabel-style";
import { SpanQuantity } from "./spanQuantity-style";
import { StatsUl } from "./statsUl-style";


export const Profile = ({username, tag, location, avatar, stats}) => (
    <ProfileDiv className="profile">
  <div className="description">
    <img
      width='100%'
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <PName className="name">{username}</PName>
    <PTag className="tag">@{tag}</PTag>
    <PLocation className="location">{location}</PLocation>
  </div>

  <StatsUl className="stats">
    <List>
      <SpanLabel className="label">Followers</SpanLabel>
      <SpanQuantity className="quantity">{stats.followers}</SpanQuantity>
    </List>
    <List>
      <SpanLabel className="label">Views</SpanLabel>
      <SpanQuantity className="quantity">{stats.views}</SpanQuantity>
    </List>
    <List>
      <SpanLabel className="label">Likes</SpanLabel>
      <SpanQuantity className="quantity">{stats.likes}</SpanQuantity>
    </List>
  </StatsUl>
</ProfileDiv>
)