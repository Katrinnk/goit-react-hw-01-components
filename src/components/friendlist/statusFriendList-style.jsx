const { styled } = require("styled-components");

export const StatusFriendlist = styled('span')( ({isOnline}) => {
    return {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
    marginRight: '10px',
    }
})