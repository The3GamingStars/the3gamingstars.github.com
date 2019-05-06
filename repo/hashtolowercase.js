const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input Hash `, (hash) => {
  var hashcase = hash;
  var hashlowercase = hashcase.toLowerCase();
  console.log(hashlowercase);
  readline.close()
})
// var hash = "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855"
// var hashlowercase = hash.toLowerCase();
// console.log(hashlowercase);