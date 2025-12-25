const arr = [1,2,3,4];
const sum = arr.reduce((accumulator,currentValue)=>accumulator + currentValue, 0);
console.log(sum);

const nestedArray = [[1,2],[3,4],[5,6],[7,8]];
const flattenedArray = nestedArray.reduce((accumulator,currentValue)=>{
  return accumulator.concat(currentValue);
},[])
console.log(flattenedArray);

const fruit = ['apple', 'banana', 'orange', 'apple', 'apple', 'banana'];
const fruitCount = fruit.reduce((accumulator,currValue)=>{
  if(accumulator[currValue]){
    accumulator[currValue]++;
  }
  else{
    accumulator[currValue] = 1;
  }
  return accumulator;
},{});
console.log(fruitCount);
