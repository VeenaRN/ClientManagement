import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent implements OnInit{

  constructor(private activeRoute:ActivatedRoute,
    private clientServ:ClientsService,private router:Router){}
  clients:Clients= new Clients(0,"","","","");

  cno:number=0;


  ngOnInit(): void {
    this.cno=this.activeRoute.snapshot.params["id"];
    this.clientServ.getClientInfobasedOnClientId(this.cno).subscribe(data=>{
this.clients=data;

    });
  }
updateClient()
{
  this.clientServ.updateClient(this.cno,this.clients).subscribe(data=>{
    this.router.navigate(['/viewall']);
  });
}


}
