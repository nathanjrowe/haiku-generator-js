# haiku-generator-js
A dumb computer tries to make a random haiku. Test it yourself <a href="https://nathanjrowe.github.io/haiku-generator-js/">HERE</a>.

## Dependencies
- syllable.js: Used for estimating the syllable count of sentences.

## How it Works
- Text is entered into the text area by the user.
- Upon clicking 'Generate' the js script validates the text and breaks it into an array of sentences.
- Array is filtered into elements with five syllables and elements with seven symbols
- Each sentence is chosen with pseudo-random indices.
