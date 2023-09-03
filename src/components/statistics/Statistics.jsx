import { Item } from "./item-style";
import { SectionStatistics } from "./sectionStatistics-style";
import { SpanLabelStatistics } from "./spanLabel-style";
import { SpanPercentage } from "./spanPercentage-style";
import { StatsList } from "./statsList-style";

export const Statistics = ({title, data}) => (
    <SectionStatistics className="statistics">
 {title && <h2 className="title">{title}</h2>}

  <StatsList className="stat-list">
    {data.map( stats => (
      <Item className="item" key={stats.id}>
        <SpanLabelStatistics className="label">{stats.label}</SpanLabelStatistics>
        <SpanPercentage className="percentage">{stats.percentage}%</SpanPercentage>
      </Item>
    ))}
  </StatsList>
</SectionStatistics>
)