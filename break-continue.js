// break statement
const num=[2,4,5,6,7,8];
for (let i=0; i<num.length;i++){
    // console.log(num[i])
    if(num[i]>5){
        break;
    }
    console.log(num[i])
}
// continue statement
const num2=[2,4,5,6,7,-23,-534,-45,8];
for(let i=0;i<num2.length;i++){
   if(num2[i]<0){
    continue
   }
   console.log(num2[i])
}
