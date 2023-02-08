const names=[
    {id:21,name:"kauser hossain"},
    {id:43,name:"nilofayesmin"},
    {id:45,name:"junayed ahamed sajib"},
    {id:87,name:"abdus salam"}
]
// const newArr=[];
// for(let i=0; i<names.length; i++){
//     // console.log(name[i])
//     const element=names[i];
//     const name=element.name;
//     newArr.push(name)
// }
// console.log(newArr)
const newArr=names.map(x=>x.name)
const bigger=names.filter(s=>s.id>40);
console.log(bigger)
// console.log(newArr)