function printAverage(x){
  sum = 0;
  for(i=0;i<x.length;i++){
    sum=sum + x[i];
  }
  sum = sum / x.length;
  return sum;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
 
y = printAverage([2,5,8]);
console.log(y); // should log 5