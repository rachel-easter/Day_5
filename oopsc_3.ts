//readonly(keyword) access modifier:
//it is used inside the class property and constructor
//once define it remains constant

//Example-1:
class Test{

    readonly password:string;
    
    constructor(p:string){
        this.password=p;
        
    }

  
}

const ob=new Test("1234");
//ob.password="invalid"; error

