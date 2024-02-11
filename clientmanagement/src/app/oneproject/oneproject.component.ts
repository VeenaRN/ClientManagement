import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Projects } from '../projects';


@Component({
  selector: 'app-oneproject',
  templateUrl: './oneproject.component.html',
  styleUrls: ['./oneproject.component.css']
})
export class OneprojectComponent implements OnInit{
   constructor(private activeRoute:ActivatedRoute,private projectServ:ProjectsService){}
    pno:number=0;
    projects:Projects=new Projects(0,"","","");

    ngOnInit():void{
            this.pno=this.activeRoute.snapshot.params["id"];
            console.log(this.pno);
            this,this.projectServ.getProjectInfoBasedOnProjectId(this.pno).subscribe(data=>{
              this.projects=data;
              console.log(this.projects);
            });

}
}
