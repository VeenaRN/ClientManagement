import { Component,OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';
import { Projects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private projectServ:ProjectsService,private router:Router){}
   
   allProjects:Projects[]=[];

  ngOnInit():void{
    this.showallprojectsdata();
  }

  getOneProjectPage(pno:number)
  {
  
   this.router.navigate(['/oneproject',pno]);
  }

  showallprojectsdata(){
    this.projectServ.showallprojectsdata().subscribe(data=>{
      this.allProjects=data;
      console.log(data);
    });
  }


}
