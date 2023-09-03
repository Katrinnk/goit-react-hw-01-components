const { styled } = require("styled-components");

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
})