import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';
import { Projects } from '../projects';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {

  constructor(private projectServ:ProjectsService,private router:Router){}
  projects:Projects=new Projects(0,"","","");

  Projectsaving()
  {
    this.projectServ.addProjects(this.projects).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/projects']);
    
    });
  }


}
