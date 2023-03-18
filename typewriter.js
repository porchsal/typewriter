const printLoop = function(str, time){
  setTimeout(()=> {
    process.stdout.write(str);}, time);
};

const sentence ="Hello there from Lighthouse Labs";
for (let i = 0; i < sentence.length; i++){
  printLoop(sentence[i], i * 100);
}
setTimeout(()=> {console.log("\n");}, sentence.length * 100);
