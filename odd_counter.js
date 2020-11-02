function returnOddArray(){
  odds = 1
  console.log(odds)
  while(odds <= 253){
    odds = odds + 2
    console.log(odds)
  }
  return odds
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]