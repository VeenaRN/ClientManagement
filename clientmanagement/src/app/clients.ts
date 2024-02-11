export class Clients {
    id:number=0;
    clientname:string="";
    address:string="";
    email:string="";
    password:string="";

    constructor(cid:number,cname:string,address:string,email:string,password:string)
    {
        this.id=cid;
        this.clientname=cname;
        this.address=address;
        this.email=email;
        this.password=password;
    }
}
