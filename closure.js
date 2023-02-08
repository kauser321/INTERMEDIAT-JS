function stopWatch(){
    let count=0;
    return function(){
        count=count+1;
        return count
    }
}
const result=stopWatch();
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())
const result2=stopWatch();
console.log(result2())
console.log(result2())
console.log(result2())
console.log(result2())
console.log(result2())
console.log(result())
