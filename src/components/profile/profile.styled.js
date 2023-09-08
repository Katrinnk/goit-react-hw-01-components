const { styled } = require('styled-components');

export const List = styled('li')({
  display: 'flex',
  flexDirection: 'column',
});

export const PLocation = styled('p')({
  fontSize: '16px',
  marginTop: '5px',
  textAlign: 'center',
});

export const PName = styled('p')({
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '10px',
  textAlign: 'center',
});

export const ProfileDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30vh',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  top: '5vh',
  left: '50%',
  transform: 'translate( -50%)',
  padding: '20px',
});

export const PTag = styled('p')({
  fontSize: '16px',
  color: '#666',
  textAlign: 'center',
});

export const SpanLabel = styled('span')({
  fontSize: '14px',
  color: '#888',
  marginBottom: '7px',
});

export const SpanQuantity = styled('span')({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
});

export const StatsUl = styled('ul')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyleType: 'none',
  padding: '0',
  marginTop: '20px',
  width: '100%',
});
