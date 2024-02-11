import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-oneclient',
  templateUrl: './oneclient.component.html',
  styleUrls: ['./oneclient.component.css']
})
export class OneclientComponent implements OnInit{


  constructor(private activeRoute:ActivatedRoute,private clientServ:ClientsService){}

    cno:number=0;
    clients:Clients=new Clients(0,"","","","");


    ngOnInit():void{
      this.cno=this.activeRoute.snapshot.params["id"];
      console.log(this.cno);
      this.clientServ.getClientInfobasedOnClientId(this.cno).subscribe(data=>{
        this.clients=data;
        console.log(this.clients);
      });
    }

  }

