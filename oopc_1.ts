//class in typescript:
//class is the keyword used to define the class and its property has type annotation
//class has constructor and methods,properties
//example:

class Form{
  
    N:string;
    r:number;
    constructor(Name:string,roll:number){
        this.N=Name;
        this.r=roll;
    }

     Show():void{
        console.log(this.N);
        console.log(this.r);

     }

}

const obj=new Form("Rachel",7);
obj.Show();
const obj1=new Form("sam",2);
obj1.Show();
