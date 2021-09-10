import { franc } from 'franc'
import langs from 'langs';
import colors from 'colors';

const testInput = "Alle menslike wesens word vry"
const langCode = franc(process.argv[2])
if (langCode === "und") {
    console.log("Sorry, couldn't figure it out! Try with more sample text.".red);
} else {
    console.log(langCode);
    console.log(`This language is ${langs.where("3", langCode).name}`.green);
}



// console.log(langs.where(3, "kor"));
// console.log(franc('我在首爾晚安安這個要十個字'))