import { generateRandomHexColor } from './hexColor';

const { styled } = require('styled-components');

export const Item = styled('li')(() => {
  const randomColor = generateRandomHexColor();
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: `${randomColor}`,
    padding: '20px',
  };
});

export const SectionStatistics = styled('section')({
  backgroundColor: '#f7f7f7',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '50vh',
  position: 'relative',
  top: '10vh',
  left: '50%',
  transform: 'translate( -50%)',
});

export const SpanLabelStatistics = styled('span')({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#555',
});

export const SpanPercentage = styled('span')({
  fontSize: '16px',
  color: '#007bff',
});

export const StatsList = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'space-around',
  padding: '0',
  margin: '0',
});

export const Title = styled('title')({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
  textAlign: 'center',
});
