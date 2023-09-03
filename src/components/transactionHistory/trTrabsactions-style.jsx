const { styled } = require("styled-components");

export const TrTransaction = styled('tr')`
    &:nth-child(even){
        background-color: #f7d6fc2f;
    }
    &:nth-child(odd){
        background-color: #ffffff;
    }
    `
