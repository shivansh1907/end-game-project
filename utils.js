import { words } from "./words.js";

export default function genRandomWord(){
    const number=Math.floor(Math.random()*14)
    const newWord=words[number];
    return newWord;
}