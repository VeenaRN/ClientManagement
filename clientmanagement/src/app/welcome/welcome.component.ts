import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
// projectdata:any=[];
clientName:any="";
clientId:any="";
clientProject:any[]=[];
//  project:Projects=new Projects(0,"","","");


constructor(private projectServ:ProjectsService){}
ngOnInit(): void {
  this.clientName=sessionStorage.getItem('user');
this.clientId=sessionStorage.getItem('cid');


this.projectServ.getProjects().subscribe((projects: Projects[]) => {
  this.clientProject = projects.filter(project => project.clientid == this.clientId);
});
}
}