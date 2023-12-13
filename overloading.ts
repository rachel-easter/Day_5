//function overloading:
//method:property of class in simplewords if a function defined inside the class it is called method

//method overloading:
class Details{
     k:number=0;
  marks():number;
  marks(a:number):number[];
  marks(a?:number):number|number[]{
    if(a===undefined){
        return ++this.k;
    }
    var arr=[1,2,3];
    return arr;
  }
}

let obj=new Details();
//var res:number|number[]=obj.marks();
var resu:number[]=obj.marks(1);
//console.log(res);
console.log(resu);

function marks() {
    throw new Error("Function not implemented.");
}

