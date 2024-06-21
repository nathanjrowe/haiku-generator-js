import {syllable} from 'https://esm.sh/syllable@5?bundle'


export const getText = () => {
    var text = document.getElementById('haiku-text').value;
    var lineArray = text.split(/\.|\?|\!|\n/);
    if(lineArray.length >= 3) {
        //remove beginning and trailing whitespace
        lineArray = lineArray.map(line => line.trim());
        console.log(lineArray.filter(line => /[a-zA-Z]+/.test(line)));
        convertToHaiku(lineArray.filter(line => line.length > 0));
    }
}

const convertToHaiku = (text) => {
    var haikuSyllables = text.map(line => syllable(line));
    console.log(haikuSyllables);
    return haiku;
}