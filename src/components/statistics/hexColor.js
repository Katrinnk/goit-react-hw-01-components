export function generateRandomHexColor() {
    const randomColorCode = Math.floor(Math.random() * 16777216);
    const hexColor = '#' + randomColorCode.toString(16).padStart(6, '0');
    return hexColor;
}