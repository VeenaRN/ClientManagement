export class Projects {

    id:number=0;
    projectname:string="";
    duration:string="";
    clientid:string="";
    

    constructor(pid:number,pname:string,duration:string,cid:string)
    {
        this.id=pid;
        this.projectname=pname;
        this.duration=duration;
        this.clientid=cid;
    }
}


