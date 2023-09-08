const { styled } = require('styled-components');

export const TableTransaction = styled('table')({
  width: '80vh',
  borderCollapse: 'collapse',
  position: 'relative',
  top: '15vh',
  left: '50%',
  transform: 'translate( -50%)',
});

export const TdTransaction = styled('td')({
  border: '1px solid #f4c9fba1',
  padding: '8px',
  textAlign: 'center',
});

export const ThTransaction = styled('th')({
  backgroundColor: '#f4def8bd',
  border: '1px solid #f4c9fba1',
  padding: '8px',
  textAlign: 'center',
});

export const TrTransaction = styled('tr')`
  &:nth-child(even) {
    background-color: #f7d6fc2f;
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
`;
