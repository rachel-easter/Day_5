//access specifier or modifier-private,public and protected
//private-allow access within the class
//protected-allow access within the class and its subclass
//public-default ,anywhere access
//Example

class Detail{

    private password:number;
    public Name:string;
    protected rollNumber:number;

    constructor(p:number,n:string,r:number){
        this.password=p;
        this.Name=n;
        this.rollNumber=r;
    }

    Show():string{
        return `Hi ${this.Name} verify your rollnumber ${this.rollNumber} and your password${this.password}`;
    }

}

class Ad extends Detail{

   Now(){
    console.log(`we printed the protected property(rollNumber) from parent class to child class ${this.rollNumber}`);
   }
}

const obj2=new Detail(12345,"rachel",7);
let res=obj2.Show();
console.log(res);
console.log(obj2.Name);
const o=new Ad(12,"sam",2);
o.Now();


