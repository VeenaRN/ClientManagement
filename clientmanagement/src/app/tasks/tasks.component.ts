import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Tasks } from '../tasks';
import { ProjectsService } from '../projects.service';
import { Projects } from '../projects';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  projects:any[]=[];
  tasks:Tasks=new Tasks(0,"","",0);
  msg:string="";

  constructor(private tasksServ:TasksService,private projectServ:ProjectsService){}

  ngOnInit(): void {
      this.getProjects();
  }

  getProjects():void{
    this.projectServ.getProjects().subscribe(Projects=>{
      this.projects=Projects;
    });
  }

 


  Tasksaving()
  {
    this.tasksServ.addTask(this.tasks).subscribe(data=>{
      console.log(data);
      this.msg="Task added successfully....";
    });
  }
}
