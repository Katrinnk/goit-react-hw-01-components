const { styled } = require("styled-components");

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
})


