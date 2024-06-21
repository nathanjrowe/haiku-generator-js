import {syllable} from 'https://esm.sh/syllable@5?bundle'


export const getText = () => {
    const text = document.getElementById('haiku-text').value;
    var lineArray = text.split(/\.|\?|\!|\n/);
    if(lineArray.length >= 3) {
        lineArray = lineArray.map(line => line.trim());
        console.log(lineArray.filter(line => /[a-zA-Z]+/.test(line)));
        convertToHaiku(lineArray.filter(line => /[a-zA-Z]+/.test(line)));
    } else {
        window.alert("Please enter at least 3 lines of text.");
    }
}

const convertToHaiku = (arr) => {
    const sevenSyls = arr.filter(line => syllable(line) === 7);
    const fiveSyls = arr.filter(line => syllable(line) === 5);
    const haiku = sevenSyls && fiveSyls ? `${fiveSyls[Math.floor(Math.random() * fiveSyls.length)]}\n${sevenSyls[Math.floor(Math.random() * sevenSyls.length)]}\n${fiveSyls[Math.floor(Math.random() * fiveSyls.length)]}` : "No haiku found.";
    return haiku;
}