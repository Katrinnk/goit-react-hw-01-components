import { generateRandomHexColor } from "./hexColor";

const { styled } = require("styled-components");

export const Item = styled('li')(() => {
    const randomColor = generateRandomHexColor();
    return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: `${randomColor}`,
    padding: '20px',
    }
})