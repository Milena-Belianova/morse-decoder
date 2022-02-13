const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrBin = [];

  for (let i = 0; i < expr.length; i += 10) {
    arrBin.push(expr.substr(i, 10).split(""));
  }

  console.log(arrBin);

  const splicedArrBin = arrBin.map((arr) =>
    arr.splice(arr.indexOf("1")).join("")
  );
  console.log(splicedArrBin);

  const morseArr = splicedArrBin.map((s) =>
    s.replace(/11/g, "-").replace(/10/g, ".")
  );
  console.log(morseArr);

  return morseArr
    .map((s) => {
      return MORSE_TABLE[s] || " ";
    })
    .join("");
}

module.exports = {
  decode,
};