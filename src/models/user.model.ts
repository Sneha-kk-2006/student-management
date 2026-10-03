export class User{
    constructor(
        public id:number,
        public name:string,
        public email:string
    ){}
       getDetails(): string{
        return `${this.name}-${this.email}`
       } 
    
}