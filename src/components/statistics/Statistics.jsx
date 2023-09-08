import {
  Item,
  SectionStatistics,
  SpanLabelStatistics,
  SpanPercentage,
  StatsList,
} from './statistics.styled';

export const Statistics = ({ title, data }) => (
  <SectionStatistics>
    {title && <h2>{title}</h2>}

    <StatsList>
      {data.map(stats => (
        <Item key={stats.id}>
          <SpanLabelStatistics>{stats.label}</SpanLabelStatistics>
          <SpanPercentage>{stats.percentage}%</SpanPercentage>
        </Item>
      ))}
    </StatsList>
  </SectionStatistics>
);
