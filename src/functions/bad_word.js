const _badWord = [
  "Anjing",
  "Babi",
  "Kunyuk",
  "Bajingan",
  "Asu",
  "Bangsat",
  "Kampret",
  "Kontol",
  "Memek",
  "Ngentot",
  "Pentil",
  "Perek",
  "Pepek",
  "Pecun",
  "Bencong",
  "Banci",
  "Maho",
  "Gila",
  "Sinting",
  "Tolol",
  "Sarap",
  "Setan",
  "Lonte",
  "Hencet",
  "Taptei",
  "Kampang",
  "Pilat",
  "Keparat",
  "Bejad",
  "Gembel",
  "Brengsek",
  "Tai",
  "Anjrit",
  "Bangsat",
  "Fuck",
  "Tetek",
  "Ngulum",
  "Jembut",
  "Totong",
  "Kolop",
  "Pukimak",
  "Bodat",
  "Heang",
  "Jancuk",
  "Burit",
  "Titit",
  "Nenen",
  "Bejat",
  "Silit",
  "Sempak",
  "Fucking",
  "Asshole",
  "Bitch",
  "Penis",
  "Vagina",
  "Klitoris",
  "Kelentit",
  "Borjong",
  "Dancuk",
  "Pantek",
  "Taek",
  "Itil",
  "Teho",
  "Bejat",
  "Pantat",
  "Bagudung",
  "Babami",
  "Kanciang",
  "Bungul",
  "Idiot",
  "Kimak",
  "Henceut",
  "Kacuk",
  "Blowjob",
  "Pussy",
  "Dick",
  "Damn",
  "Ass",
];
const reverseSameChar = (word) => {
  let sameChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "!"];
  let result = "";
  for (let index = 0; index < word.length; index++) {
    if (sameChar.indexOf(word[index]) === -1) {
      result += word[index];
    } else {
      if (word[index] === "0") {
        result += "o";
      }
      if (word[index] === "1") {
        result += "l";
      }
      if (word[index] === "2") {
        result += "z";
      }
      if (word[index] === "3") {
        result += "e";
      }
      if (word[index] === "4") {
        result += "a";
      }
      if (word[index] === "5") {
        result += "s";
      }
      if (word[index] === "6") {
        result += "b";
      }
      if (word[index] === "7") {
        result += "t";
      }
      if (word[index] === "8") {
        result += "b";
      }
      if (word[index] === "9") {
        result += "g";
      }
      if (word[index] === "*") {
        result += " ";
      }
      if (word[index] === "!") {
        result += " ";
      }
    }
  }
  console.log(result);
  return result;
};

export default function isBadWord(message) {
  if (message !== "") {
    let words = reverseSameChar(message).split(" ");
    let wordUpperCase = words.map((word) => word.toUpperCase());
    let _BadwordUpperCase = _badWord.map((word) => {
      return word.toUpperCase();
    });
    return _BadwordUpperCase.some((word) => wordUpperCase.includes(word));
  }
}
