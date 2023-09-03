const { styled } = require("styled-components");

export const ProfileDiv = styled('div')({ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30vh',
    border: '5px solid #d8a3f19b',
    // boxShadow: '10px 5px 5px #d8a3f19b',
    position: 'relative',
    top: '15vh',
    left: '50%',
    transform: 'translate( -50%)',
    padding: '20px',
})

export const StatsUl = styled('ul')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    width: '100%',
})

export const List = styled('li')({
    display: 'flex',
    flexDirection: 'column',
    
})
