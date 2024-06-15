# 短小且强悍的Utils集合

## Url
const getParameters = (URL) => {
URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
return JSON.stringify(URL);
};



## Cookie

const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/, `=;expires=${new Date(0).toUTCString()};path=/`));






## Date
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");
// Result: true

const dayOfYear = (date) =>
Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());

const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date("2020-10-21"), new Date("2021-10-22"))

const timeFromDate = date => date.toTimeString().slice(0, 8);



## String
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")
// Result: Follow for more

const reverse = str => str.split('').reverse().join('');

## Array
const removeDuplicates = (arr) => [...new Set(arr)];
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());


## Math
const rgbToHex = (r, g, b) =>
"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);
// Result: #0033ff`

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex());
// Result: #92b008

const isEven = num => num % 2 === 0;

const average = (...args) => args.reduce((a, b) => a + b) / args.length;






## Clipboard
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");

## Broswer
const goToTop = () => window.scrollTo(0, 0);
const getSelectedText = () => window.getSelection().toString();
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");
