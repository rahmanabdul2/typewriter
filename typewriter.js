const sentence = "hello there from lighthouse labs";
let delay = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  console.log(); // add a newline at the end
}, delay);