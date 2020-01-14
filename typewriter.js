const sentence = "hello there from lighthouse labs";

for (let c = 0; c < sentence.length; c++) {
  setTimeout(() => {
    process.stdout.write(sentence[c]);
  }, (c + 1) * 100)
}