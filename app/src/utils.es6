export const twoDP = (num) => parseFloat(Math.round(num * 100) / 100).toFixed(2);

export const niceDate = (str) => (new Date(str)).toLocaleDateString("en-GB").replace(/\//g, ' / ')