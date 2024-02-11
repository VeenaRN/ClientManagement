export class Tasks {

    id:number=0;
    taskname:string="";
    taskDescription:string="";
    projectid:number=0;

 constructor(tid:number,tname:string,taskDescription:string,projectid:number)
    {
        this.id=tid;
        this.taskname=tname;
        this.taskDescription=taskDescription;
        this.projectid=projectid;
       
    }
}