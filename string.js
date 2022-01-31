function showVerticalMessage(string) {
  let newString = '';
  if (typeof string === 'string') {
    if (string.includes('м', 0)) {
      string = string[0].toUpperCase() + string.slice(1);
    } for (let symbols of string.slice(0, 10)) {
      newString += `${symbols}\n`;
    } return `${newString}`;
  } return 'Input the string'
}
console.log(showVerticalMessage());