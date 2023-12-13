//rest parameter:
//the type of the rest parameter is an array type!!
//It is ues to consider the infinite arguments as an array:

function subject(...marks:number[]){
//sum all the element in the array:

let total=0;
marks.forEach((ele)=>total+=ele);
return total;
}

var result=subject(100,100,98);
console.log(result);


