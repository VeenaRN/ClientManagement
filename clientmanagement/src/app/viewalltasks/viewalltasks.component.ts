import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-viewalltasks',
  templateUrl: './viewalltasks.component.html',
  styleUrls: ['./viewalltasks.component.css']
})
export class ViewalltasksComponent implements OnInit {

  constructor(private taskServ:TasksService,private router:Router){}
 allTasks:Tasks[]=[];
 

 ngOnInit(): void {
  
     this.showallTasks();
}




 showallTasks()
 {
   this.taskServ.showallTasks().subscribe(data=>{
   this.allTasks=data;
   console.log(data);
   });
 }

}
