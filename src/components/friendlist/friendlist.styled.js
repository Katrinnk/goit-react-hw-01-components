const { styled } = require('styled-components');

export const FriendList = styled('ul')({
  listStyle: 'none',
  padding: '15px 0',
  position: 'relative',
  top: '15vh',
  left: '50%',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '30vh',
  transform: 'translate( -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '25px',
});

export const ItemFriendList = styled('li')({
  display: 'flex',
  alignItems: 'center',
});

export const PNameFriendList = styled('p')({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  marginLeft: '10px',
});

export const StatusFriendlist = styled('span')(({ isOnline }) => {
  return {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
    marginRight: '10px',
  };
});
